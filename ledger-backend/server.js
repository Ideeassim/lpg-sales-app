const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const receiptRoutes = require('./routes/ReceiptRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'ledgerDB'
})

  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Use the receipt route
app.use('/api/receipts', receiptRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
