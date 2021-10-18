import nodemailer from "nodemailer";

const NODEMAILER_AUTH_USER = process.env.NODEMAILER_AUTH_USER;
const NODEMAILER_AUTH_PASS = process.env.NODEMAILER_AUTH_PASS;
const TO = "b00502013@gmail.com";

// https://nodemailer.com/smtp/
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: NODEMAILER_AUTH_USER,
    pass: NODEMAILER_AUTH_PASS,
  },
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const mailOptions = {
      to: TO,
      subject: `Sent by ${req.body.email} at ${new Date()}.`,
      text: req.body.message,
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
    return res.status(200).json({
      msg: `Sending a E-mail to ${TO} with nodemailer using.`,
    });
  }
  return res.status(405).end();
};

export default handler;
