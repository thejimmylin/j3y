import client from "../../prisma/client";

const modelName = 'Image'
const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, url } = req.body;
    const result = await client.image.create({ data: { name, url } });
    res.status(201).json(result);
  }
  const result = await client.image.findMany();
  res.status(200).json(result);
};

export default handler;
 