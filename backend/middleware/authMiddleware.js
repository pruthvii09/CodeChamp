const jwt = require("jsonwebtoken");
const prisma = require("../prisma");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(400).json({ error: "Auth Token Required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await prisma.user.findUnique({
      where: {
        id: _id,
      },
    });
    next();
  } catch (err) {
    return res.status(400).json({ error: "Internal Server Error" });
  }
};
