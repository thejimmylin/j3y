// TODO: use import
const sgClient = require("@sendgrid/mail");

const getMySgClient = () => {
  sgClient.setApiKey(process.env.MY_SENDGRID_API_KEY);
  return sgClient;
};

const mySgClient = getMySgClient();

const handler = async (req, res) => {
  // TODO: use better log to handle different http methods.
  if (req.method === "POST") {
    const { email, message } = req.body;
    const msg = {
      to: email,
      from: "contact@jimmylin.org",
      subject: `[jimmylin.org] ${email} contacts you.]`,
      text: message,
      html: `<p>${message}</p>`,
    };
    // TODO: use async/await
    mySgClient
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    return res.status(200).end();
  }
  res.status(405).end();
};

export default handler;
