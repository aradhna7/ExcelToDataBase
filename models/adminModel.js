const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },
    Mobile: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = Admin = mongoose.model('Admin', adminSchema);
