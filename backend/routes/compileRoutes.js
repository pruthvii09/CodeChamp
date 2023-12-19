const express = require("express");
const { compilePythonCode } = require("../controller/compileController");
const router = express.Router();

router.post("/compile", compilePythonCode);

module.exports = router;
