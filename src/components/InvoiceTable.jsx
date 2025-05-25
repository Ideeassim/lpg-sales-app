import { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button, Typography, Box
} from '@mui/material';

const InvoiceTable = () => {
  const [rows, setRows] = useState([
    { item: '', quantity: '', price: '', total: 0 }
  ]);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    const quantity = parseFloat(updatedRows[index].quantity) || 0;
    const price = parseFloat(updatedRows[index].price) || 0;
    updatedRows[index].total = quantity * price;

    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, { item: '', quantity: '', price: '', total: 0 }]);
  };

  const grandTotal = rows.reduce((sum, row) => sum + row.total, 0);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Sales Invoice
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price (₦)</TableCell>
              <TableCell>Total (₦)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row.item}
                    onChange={(e) => handleChange(index, 'item', e.target.value)}
                    placeholder="e.g., Cylinder Gas"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.price}
                    onChange={(e) => handleChange(index, 'price', e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  ₦{row.total.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2}>
        <Button variant="contained" onClick={addRow}>
          + Add Row
        </Button>
      </Box>

      <Box mt={3}>
        <Typography variant="h6">
          Grand Total: ₦{grandTotal.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default InvoiceTable;
