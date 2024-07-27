// emailController.js
import nodemailer from 'nodemailer';
import User from '../models/User.js'; // Include the .js extension

export const sendBirthdayEmail = async () => {
  const today = new Date();
  const todayFormatted = `${today.getMonth() + 1}-${today.getDate()}`;

  try {
    const users = await User.find();
    users.forEach(user => {
      const dob = new Date(user.dateOfBirth);
      const dobFormatted = `${dob.getMonth() + 1}-${dob.getDate()}`;
      if (todayFormatted === dobFormatted) {
        sendEmail(user.email, user.username);
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const sendEmail = (email, username) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Happy Birthday!',
    html: `<h1>Happy Birthday, ${username}!</h1><p>We hope you have a fantastic day!</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
