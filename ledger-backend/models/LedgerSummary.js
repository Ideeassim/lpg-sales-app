const mongoose = require('mongoose');

const ledgerSummarySchema = new mongoose.Schema({
  month: String,
  year: Number,
  summary: [
    {
      product: String,
      noOfReceipts: Number,
      total: Number,
      expense: Number,
      profit: Number
    }
  ],
  totalAmount: Number
}, { timestamps: true });

module.exports = mongoose.model('LedgerSummary', ledgerSummarySchema);
