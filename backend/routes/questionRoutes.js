const express = require("express");
const {
  addQuestion,
  getAllQuestion,
  getQuestionById,
} = require("../controller/questionController");

const router = express.Router();

router.post("/", addQuestion);
router.get("/", getAllQuestion);
router.get("/:id", getQuestionById);

module.exports = router;
