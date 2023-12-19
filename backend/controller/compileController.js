const compiler = require("compilex");

const compilePythonCode = (req, res) => {
  const code = req.body.code;
  const envData = { OS: "linux" };
  compiler.compilePython(envData, code, function (data) {
    console.log(data);
    console.log(code);
    res.send(data);
  });
};

module.exports = {
  compilePythonCode,
};
