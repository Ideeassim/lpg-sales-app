import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/receipts';

const TestReceipts = () => {
  const [form, setForm] = useState({
    product: '',
    quantity: '',
    total: '',
    invoiceNo: '',
    month: '',
    year: new Date().getFullYear(),
  });

  const [receipts, setReceipts] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addReceipt = async () => {
    try {
      const res = await axios.post(`${API_URL}/add`, form);
      alert('Receipt added!');
      fetchReceipts();
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding receipt');
    }
  };

  const fetchReceipts = async () => {
    try {
      const res = await axios.get(`${API_URL}/all`);
      setReceipts(res.data);
    } catch (err) {
      alert('Error fetching receipts');
    }
  };

  const clearReceipts = async () => {
    try {
      await axios.delete(`${API_URL}/clear`, { data: { month: form.month, year: form.year } });
      alert('Receipts cleared!');
      fetchReceipts();
    } catch (err) {
      alert('Error clearing receipts');
    }
  };

  useEffect(() => {
    fetchReceipts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Test Receipts</h2>

      <input name="product" placeholder="Product" onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" onChange={handleChange} />
      <input name="total" placeholder="Total" onChange={handleChange} />
      <input name="invoiceNo" placeholder="Invoice No" onChange={handleChange} />
      <input name="month" placeholder="Month" onChange={handleChange} />
      <input name="year" placeholder="Year" onChange={handleChange} value={form.year} />

      <br /><br />
      <button onClick={addReceipt}>Add Receipt</button>
      <button onClick={clearReceipts} style={{ marginLeft: '1rem' }}>Clear Month</button>

      <h3>All Receipts</h3>
      <ul>
        {receipts.map((r) => (
          <li key={r._id}>{r.product} - {r.total} - {r.month} {r.year}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestReceipts;
