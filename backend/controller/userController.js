const prisma = require("../prisma/index");
const getJwtToken = require("../helpers/getJwtToken");
const bcryptjs = require("bcryptjs");
const signup = async (req, res) => {
  const { name, email, isAdmin, contact, password } = req.body;
  console.log(req.body);
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
    console.log(req.body);
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
      return res.status(400).json({ message: "User Not Found" });
    }
    const match = await bcryptjs.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const token = getJwtToken(user._id);
    return res.status(200).json({ email, token, name: user.name });
  } catch (err) {
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

// get single profile
module.exports = { signup, login };
