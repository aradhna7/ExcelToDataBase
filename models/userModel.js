const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },
    Mobile: {
      type: Number,
      require: true,
    },
    Age: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model('User', userSchema);
