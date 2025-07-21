const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: String,
  account: String,
  amount: Number,
  narration: String,
  accExp: Number,
  dom1Exp: Number,
  dom2Exp: Number,
  cylExp: Number,
  month: String,
  year: Number
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
