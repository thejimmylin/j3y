import nodemailer from "nodemailer";

const NODEMAILER_AUTH_USER = process.env.NODEMAILER_AUTH_USER;
const NODEMAILER_AUTH_PASS = process.env.NODEMAILER_AUTH_PASS;
const FROM = "no-reply@jimmy.org";
const TO = "b00502013@gmail.com";
const SUBJECT = "Hello world";
const TEXT = `This is testing E-mail sent by nodemailer at ${new Date()}.`;

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: NODEMAILER_AUTH_USER,
    pass: NODEMAILER_AUTH_PASS,
  },
  secure: true,
});

const sendEmail = async () => {
  const mailOptions = {
    from: FROM,
    to: TO,
    subject: SUBJECT,
    text: TEXT,
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
  await sendEmail();
  return res.status(200).json({
    msg: `Sending a E-mail to ${TO} with nodemailer using user=${NODEMAILER_AUTH_USER}, pass=${NODEMAILER_AUTH_PASS}`,
  });
};

export default handler;
