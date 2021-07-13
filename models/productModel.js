const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    ProductName: {
      type: String,
      require: true,
    },
    Image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model('Product', productSchema);
