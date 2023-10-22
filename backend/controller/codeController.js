const { runCodeWithInput } = require("../helpers/runCode");
const { submitCodeWithInput } = require("../helpers/submitCode");
const prisma = require("../prisma/index");
const compiler = require("compilex");

var options = { stats: true };
compiler.init(options);

const submitCode = async (req, res) => {
  const { code, language, id, authorId } = req.body;

  if (language === "cpp") {
    var envData = { OS: "linux", cmd: "g++", options: { timeout: 5000 } };
    submitCodeWithInput(
      req,
      res,
      envData,
      code,
      language,
      authorId,
      id,
      compiler.compileCPPWithInput
    );
  } else if (language === "python") {
    var envData = { OS: "linux", options: { timeout: 5000 } };
    submitCodeWithInput(
      req,
      res,
      envData,
      code,
      language,
      id,
      authorId,
      compiler.compilePythonWithInput
    );
  } else if (language === "java") {
    var envData = { OS: "linux", options: { timeout: 5000 } };
    submitCodeWithInput(
      req,
      res,
      envData,
      code,
      language,
      id,
      authorId,
      compiler.compileJavaWithInput
    );
  }
};

const runCode = async (req, res) => {
  const { code, language, id, authorId } = req.body;
  if (language === "cpp") {
    var envData = { OS: "linux", cmd: "g++", options: { timeout: 5000 } };
    runCodeWithInput(
      req,
      res,
      envData,
      code,
      language,
      id,
      authorId,
      compiler.compileCPPWithInput
    );
  } else if (language === "python") {
    var envData = { OS: "linux", options: { timeout: 5000 } };
    runCodeWithInput(
      req,
      res,
      envData,
      code,
      language,
      id,
      authorId,
      compiler.compilePythonWithInput
    );
  } else if (language === "java") {
    var envData = { OS: "linux", options: { timeout: 5000 } };
    runCodeWithInput(
      req,
      res,
      envData,
      code,
      language,
      id,
      authorId,
      compiler.compileJavaWithInput
    );
  }
};
const alreadySubmit = async (req, res) => {
  const { id } = req.params;
  try {
    const submittedQuestions = await prisma.code.findMany({
      where: {
        submitted: true,
        authorId: id,
      },
      select: {
        questionId: true,
      },
    });
    if (!submittedQuestions) {
      return res.status(400).json({ error: "No Such Questions Found" });
    }
    res.status(200).json({ submittedQuestions });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
module.exports = { runCode, submitCode, alreadySubmit };
