const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
  invoiceNo: String,
  invoiceDate: String,
  account: String,
  amount: Number,
  profit: Number,
  month: String,
  year: Number,
  item: String,
  quantity: Number,
  price: Number,
  total: Number
}, { timestamps: true });

module.exports = mongoose.model('Receipt', receiptSchema);
