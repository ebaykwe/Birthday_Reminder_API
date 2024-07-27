import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'; // Include the .js extension
import { sendBirthdayEmail } from './controllers/emailController.js';

dotenv.config();

// Connect to database
connectDB();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.get('/test/send-emails', (req, res) => {
    sendBirthdayEmail();
    res.status(200).send('You received this email because today is your birthday.');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
