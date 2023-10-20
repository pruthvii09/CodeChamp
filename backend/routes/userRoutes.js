const express = require("express");
const {
  signup,
  login,
  getSingleProfile,
  uploadUserDetails,
  getUserDetails,
} = require("../controller/userController");
const authMiddileware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/uploadDetails", uploadUserDetails);
router.get("/:id", authMiddileware, getSingleProfile);
router.get("/userDetail/:id", getUserDetails);
module.exports = router;
