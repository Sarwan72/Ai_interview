const nodemailer = require("nodemailer");

const transPorter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sarwancodes1@gmail.com",
    pass: "eotz vezj rnsj kjpi",
  },
});

async function senData(to, subject, html) {
  const mailFormat = {
    from: "sarwancodes1@gmail.com",
    to: to,
    subject: subject,
    html: html,
  };

  try {
    await transPorter.sendMail(mailFormat);
    console.log("mail sent");
  } catch (err) {
    console.log(err);
  }
}

module.exports = senData;