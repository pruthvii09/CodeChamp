const express = require("express");
const {
  runCode,
  submitCode,
  alreadySubmit,
} = require("../controller/codeController");

const router = express.Router();

router.post("/run", runCode);
router.post("/submit", submitCode);
router.get("/alreadysubmit/:id", alreadySubmit);

module.exports = router;
