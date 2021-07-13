const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', require('./routes/api/user'));
app.use('/api/admin', require('./routes/api/admin'));
app.use('/api/products', require('./routes/api/product'));

app.get('/', (req, res) => {
  res.send('hello');
});

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(`server is running in ${process.env.NODE_ENV} on port ${port}`)
);
