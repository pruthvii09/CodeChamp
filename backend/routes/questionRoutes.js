const express = require("express");
const {
  addQuestion,
  getAllQuestion,
} = require("../controller/questionController");

const router = express.Router();

router.post("/", addQuestion);
router.get("/", getAllQuestion);

module.exports = router;
