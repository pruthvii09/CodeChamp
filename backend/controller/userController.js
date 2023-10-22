const prisma = require("../prisma/index");
const getJwtToken = require("../helpers/getJwtToken");
const bcryptjs = require("bcryptjs");
const signup = async (req, res) => {
  const { name, email, isAdmin, contact, password } = req.body;
  try {
    const requiredFields = ["name", "email", "contact", "password"];
    const missingFields = [];
    requiredFields.forEach((field) => {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    });
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Please provide following fields : ${missingFields.join(",")}`,
      });
    }
    const exist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (exist) {
      return res
        .status(400)
        .json({ error: "Email Already Exist Please Login" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        isAdmin,
        contact,
        password: hash,
      },
    });
    const token = getJwtToken(user.id);
    res.status(200).json({ ...user, token });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(400).json({ error: "User Not Found" });
    }
    const match = await bcryptjs.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Incorrect Password" });
    }
    const token = getJwtToken(user._id);
    return res.status(200).json({ ...user, token });
  } catch (err) {
    return res.status(400).json({ error: "Internal Server Error" });
  }
};

// get single profile
const getSingleProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
        contact: true,
      },
    });
    if (!user) {
      return res.status(400).json({ error: "User not Found" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};
const uploadUserDetails = async (req, res) => {
  const { country, github, roles, desc, userId } = req.body;
  try {
    const userDetails = await prisma.userDetails.create({
      data: {
        country,
        github,
        roles,
        desc,
        userId,
      },
    });
    if (!userDetails) {
      return res.status(400).json({ error: "Internal Error" });
    }
    res.status(200).json({ userDetails });
  } catch (err) {
    return res.status(400).json({ error: "Internal Error" });
  }
};
const getUserDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetails = await prisma.user.findFirst({
      where: {
        id: id,
      },
      select: {
        userDetails: true,
      },
    });
    if (!userDetails) {
      return res.status(400).json({ error: "No user details found" });
    }
    res.status(200).json({ userDetails });
  } catch (err) {
    return res.status(400).json({ error: "Internal Error" });
  }
};
module.exports = {
  signup,
  login,
  getSingleProfile,
  uploadUserDetails,
  getUserDetails,
};
