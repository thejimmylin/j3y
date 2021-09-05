import prisma from "../../lib/prisma";

const handler = async (req, res) => {
  const result = await prisma.user.findMany();
  res.json(result);
};

export default handler;
