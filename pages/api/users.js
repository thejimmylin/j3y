import prisma from "../../utils/prisma";

const handler = async (req, res) => {
  const result = await prisma.user.findMany();
  res.json(result);
};

export default handler;
