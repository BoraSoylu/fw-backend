import nodemailer, { Transporter } from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();
console.log(process.env.EMAIL_USERNAME);
console.log(process.env.EMAIL_PASSWORD);
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

var mailOptions = {
  from: process.env.EMAIL_USERNAME,
  to: '',
  subject: 'Mail Service test',
  text: 'Selam alüminyum bu maili node.js kullanarak attım.',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
