const jwt = require("jsonwebtoken");
const prisma = require("../prisma");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await prisma.user.findFirst({
      where: {
        id: _id,
      },
      select: {
        id: true,
        email: true,
      },
    });
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = authMiddleware;
