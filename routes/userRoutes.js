import express from 'express';
import User from '../models/User.js'; 

const router = express.Router();

router.post('/add', async (req, res) => { 
  const { username, email, dateOfBirth } = req.body;
  try {
    const newUser = new User({ username, email, dateOfBirth });
    await newUser.save();
    res.status(201).json({ message: 'User added' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router; 
