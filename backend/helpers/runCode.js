const prisma = require("../prisma/index");
const { RUN_COUNT } = require("./constants");

const runCodeWithInput = async (
  req,
  res,
  envData,
  code,
  language,
  id,
  authorId,
  compileFn
) => {
  console.log(authorId);
  try {
    const alreadyOpted = await prisma.code.findFirst({
      where: {
        authorId: authorId,
        questionId: id,
      },
    });
    if (alreadyOpted?.runCount >= RUN_COUNT) {
      return res.status(400).json({ error: "Run Limit Exceed" });
    }
    const testCases = await prisma.testCase.findMany({
      where: {
        questionId: id,
      },
      select: {
        input: true,
        output: true,
      },
    });
    console.log(testCases);
    let passedTestCases = 0;
    let testCasesCount = 3;
    const startTime = performance.now();
    for (const testcase of testCases) {
      console.log("Hello");
      try {
        const data = await new Promise((resolve, reject) => {
          compileFn(envData, code, testcase.input, (data) => {
            resolve(data);
          });
        });

        if (data.error) {
          return res.status(500).json({
            error: data.error,
          });
        } else {
          if (testcase.output.trim() == data.output.trim()) {
            passedTestCases++;
          }
        }
      } catch (error) {
        console.log({ error: error });
        res.status(500).json({
          error: `${passedTestCases}/${testCasesCount} tests passed. ${
            testCasesCount - passedTestCases
          } remaning.`,
        });
      }
    }
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    if (alreadyOpted) {
      await prisma.code.update({
        where: {
          id: alreadyOpted.id,
        },
        data: {
          runCount: {
            increment: 1,
          },
          executionTime: executionTime,
          passedTest: (passedTestCases / testCasesCount) * 100,
          code: code,
        },
      });
    } else {
      await prisma.code.create({
        data: {
          language,
          authorId: authorId,
          questionId: id,
          runCount: 1,
          submitted: false,
          passedTest: (passedTestCases / testCasesCount) * 100,
          executionTime: executionTime,
          code: code,
        },
      });
    }
    if (passedTestCases == testCasesCount) {
      return res.status(200).json({
        message: `${passedTestCases}/${testCasesCount} All tests passed successfully and executed in ${executionTime} ms.`,
      });
    } else {
      res.status(500).json({
        error: `${passedTestCases}/${testCasesCount} tests passed. ${
          testCasesCount - passedTestCases
        } remaning.`,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: `${passedTestCases}/${testCasesCount} tests passed. ${
        testCasesCount - passedTestCases
      } remaning.`,
    });
  }
};

module.exports = { runCodeWithInput };
