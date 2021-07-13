const express = require('express');
const router = express.Router();

const Product = require('../../models/productModel');

// @route   GET api/product
// @desc    GET ALL Products
// @access  PUBLIC
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

// @route   POST api/product
// @desc    ADD PRODUCTS
// @access  PUBLIC
router.post('/', async (req, res) => {
  try {
    const productData = req.body;
    Product.insertMany(productData);
    res.json(productData);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

// @route   DELETE api/product
// @desc    DELETE products
// @access  PUBLIC
router.delete('/', async (req, res) => {
  try {
    Product.deleteMany().then(function () {
      console.log('Data deleted'); // Success
      res.send('Data deleted');
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
