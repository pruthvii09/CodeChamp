const express = require("express");
const {
  signup,
  login,
  getSingleProfile,
} = require("../controller/userController");
const authMiddileware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/:id", authMiddileware, getSingleProfile);
module.exports = router;
