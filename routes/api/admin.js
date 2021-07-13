const express = require('express');
const router = express.Router();

const Admin = require('../../models/adminModel');

// @route   GET api/admin
// @desc    GET ALL Admin
// @access  PUBLIC
router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find();

    res.json(admins);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

// @route   POST api/admin
// @desc    ADD ADMINS
// @access  PUBLIC
router.post('/', async (req, res) => {
  try {
    const adminData = req.body;
    Admin.insertMany(adminData);
    res.json(adminData);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

// @route   DELETE api/admin
// @desc    DELETE ADMIN
// @access  PUBLIC
router.delete('/', async (req, res) => {
  try {
    Admin.deleteMany().then(function () {
      console.log('Data deleted'); // Success
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
