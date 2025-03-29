const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const User = require('../models/User');

// Get Profile
router.get('/me', protect, async (req, res) => {
  res.json(req.user);
});

// Update Profile
router.patch('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    Object.keys(req.body).forEach(key => {
      if (key !== 'password' && user[key] !== undefined) {
        user[key] = req.body[key];
      }
    });
    
    if (req.body.password) {
      user.password = req.body.password;
    }
    
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
