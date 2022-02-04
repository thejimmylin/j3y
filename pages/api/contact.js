import sgMail from "@sendgrid/mail";

const MY_EMAIL = "b00502013@gmail.com";

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
  const { email, message } = req.body;
  const msg = {
    to: MY_EMAIL,
    from: "notifications@jimmylin.org",
    subject: `${email} wants to contact you!`,
    text: `${email}: ${message}`,
    html: `<p>${email}: ${message}<p/>`,
  };
  try {
    await sendMail(msg);
    res.status(200).end();
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(400).end();
  }
};

export default handler;
