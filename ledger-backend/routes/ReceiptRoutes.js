const express = require('express');
const router = express.Router();
const Receipt = require('../models/Receipt');

// Add a new receipt
router.post('/add', async (req, res) => {
  try {
    const data = req.body;

    // Check if data is an array or a single object
    if (Array.isArray(data)) {
      const savedReceipts = await Receipt.insertMany(data);
      res.status(201).json({ message: 'Receipts saved', receipts: savedReceipts });
    } else {
      const receipt = new Receipt(data);
      await receipt.save();
      res.status(201).json({ message: 'Receipt saved', receipt });
    }

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Get all receipts
router.get('/all', async (req, res) => {
  try {
    const receipts = await Receipt.find().sort({ date: -1 });
    res.json(receipts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete receipts 
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Receipt.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Receipt not found' });
    }
    res.json({ message: 'Receipt deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
