import cron from 'node-cron';
import { sendBirthdayEmail } from '../controllers/emailController.js';

cron.schedule('0 7 * * *', () => {
  console.log('Running daily birthday check');
  sendBirthdayEmail();
});

export default cron;
