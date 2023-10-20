const prisma = require("../prisma/index");

const addQuestion = async (req, res) => {
  const { number, title, description, template, testCases } = req.body;
  console.log(req.body);
  try {
    const question = await prisma.question.create({
      data: {
        number,
        title,
        description,
        template: {
          create: template.map((t) => {
            return {
              language: t.language,
              code: t.code,
            };
          }),
        },
        testCases: {
          create: testCases.map((tc) => {
            return {
              language: tc.language,
              input: tc.input,
              output: tc.output,
            };
          }),
        },
      },
    });
    console.log(question);
    if (!question) {
      return res.status(400).json({ error: "Error" });
    }
    res.status(200).json({ question });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
const getAllQuestion = async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    if (!questions) {
      return res.status(400).json({ error: "No Questions Found" });
    }
    console.log("hello", questions);
    res.status(200).json({ questions });
  } catch (err) {
    res.status(200).json({ error: err });
  }
};
module.exports = { addQuestion, getAllQuestion };
