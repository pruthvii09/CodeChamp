const express = require("express");
const { addWorkDetails, deleteWork } = require("../controller/workController");

const router = express.Router();

router.delete("/:id", deleteWork);
router.post("/", addWorkDetails);

module.exports = router;
