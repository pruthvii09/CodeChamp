const prisma = require("../prisma/index");

const addWorkDetails = async (req, res) => {
  const { position, company, start, end, userId } = req.body;
  console.log(req.body);
  try {
    const work = await prisma.work.create({
      data: {
        position,
        company,
        start,
        end,
        userId,
      },
    });
    if (!work) {
      return res.status(400).json({ error: "No Work Details" });
    }
    res.status(200).json({ work });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const deleteWork = async (req, res) => {
  const { id } = req.params;
  try {
    const work = await prisma.work.delete({
      where: {
        id: id,
      },
    });
    if (!work) {
      return res.status(400).json({ error: "Error While Deleting" });
    }
    res.status(200).json({ work });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = { addWorkDetails, deleteWork };
