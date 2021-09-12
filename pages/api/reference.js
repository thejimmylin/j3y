import client from "../../prisma/client";

const handler = async (req, res) => {
  const result = await client.reference.findMany();
  res.json(result);
};

export default handler;
