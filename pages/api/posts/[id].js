import client from "../../../prisma/client";

const handler = async (req, res) => {
  const id = req.query.id;
  const result = await client.post.findUnique({ where: { id: Number(id) } });
  res.status(200).json(result);
};

export default handler;
