const express = require('express');
const router = express.Router();

const User = require('../../models/userModel');

// @route   GET api/user
// @desc    GET ALL User
// @access  PUBLIC
router.get('/', async (req, res) => {
  try {
    const user = await User.find();

    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

// @route   POST api/users
// @desc    ADD USERS
// @access  PUBLIC
router.post('/', async (req, res) => {
  try {
    const userData = req.body;
    User.insertMany(userData);
    res.json(userData);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

// @route   DELETE api/users
// @desc    DELETE USERS
// @access  PUBLIC
router.delete('/', async (req, res) => {
  try {
    User.deleteMany().then(function () {
      console.log('Data deleted'); // Success
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
