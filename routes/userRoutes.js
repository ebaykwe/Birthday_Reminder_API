// userRoutes.js
import express from 'express';
import User from '../models/User.js'; // Make sure to include the .js extension

const router = express.Router();

// Add a new user
router.post('/add', async (req, res) => { // Changed from GET to POST as adding a user typically uses POST
  const { username, email, dateOfBirth } = req.body;
  try {
    const newUser = new User({ username, email, dateOfBirth });
    await newUser.save();
    res.status(201).json({ message: 'User added' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router; // Use export default instead of module.exports
