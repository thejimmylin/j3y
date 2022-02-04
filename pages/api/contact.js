import sgMail from "@sendgrid/mail";

const MY_EMAIL = "b00502013@gmail.com";
const SENT_FROM = "notifications@jimmylin.org";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (msg) => {
  return new Promise((resolve, reject) => {
    sgMail.send(msg).then(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { email, message } = req.body;
    const msg = {
      to: MY_EMAIL,
      from: SENT_FROM,
      subject: `${email} wants to contact you!`,
      text: `${email}: ${message}`,
      html: `<p>${email}: ${message}<p/>`,
    };
    try {
      await sendMail(msg);
      res.status(200).end();
    } catch (error) {
      const reason = error.response ? error.response : error;
      const errorMsgs = [`Email is not sent because of ${reason}.`];
      res.status(400).json({ errorMsgs });
    }
  } else {
    const errorMsgs = ["Please use `POST` method."];
    res.status(405).json({ errorMsgs });
  }
};

export default handler;
