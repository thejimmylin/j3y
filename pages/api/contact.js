// https://nodemailer.com/smtp/
import nodemailer from "nodemailer";

const NODEMAILER_AUTH_USER = process.env.NODEMAILER_AUTH_USER;
const NODEMAILER_AUTH_PASS = process.env.NODEMAILER_AUTH_PASS;
const MY_EMAIL = "b00502013@gmail.com";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: NODEMAILER_AUTH_USER,
    pass: NODEMAILER_AUTH_PASS,
  },
});

const sendMeEmail = async ({ subject, message }) => {
  const mailOptions = {
    to: MY_EMAIL,
    subject,
    text: message,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, message } = req.body;
    const now = new Date();
    const subject = `[Jimmy Lin] A contact message sent by ${email} at ${now}.`;
    await sendMeEmail({
      subject,
      message,
    });
    return res.status(200).end();
  }
  return res.status(405).end();
};

export default handler;
