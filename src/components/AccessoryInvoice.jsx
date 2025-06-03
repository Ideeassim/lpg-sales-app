import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button, Typography, Box
} from '@mui/material';


const InvoiceHeading = ({heading, grandTotal, setGrandTotal,rows,setRows, handleAccSave, date,info, handleDataSave}) => {
    const [accessory, setAccessory] = useState('');
  const [input, setInput] = useState({
    item: accessory,
    quantity: '',
    price: '',
    total: '' // This will be calculated
  });

 
 
  

 useEffect(() =>{
   const grandTotal =rows.reduce((acc, item) => acc + parseFloat(item.total || 0 ), 0);
      setGrandTotal(grandTotal)}, [rows]);
     
  const handleChange = (event) => {
    const value= event.target.value
    setAccessory(value);
    setInput((prev)=>({...prev, item:value}))
  };

  // Track textfield changes
  function handleInput(event) {
   
    const { name, value } = event.target;
    setInput((prev)=>{
      const saveInput={...prev, [name]:value};
      const quantity= parseFloat(saveInput.quantity) || 0;
      const price = parseFloat(saveInput.price) || 0;
      if (saveInput.price !=='' & saveInput.quantity !=='') {
        saveInput.total= quantity*price;
      }
      
      return saveInput
    });   
    
  } 
   const AccessoryList=["Standard Regulator (HP)", "Standar Regulator(LP)", "Standard Valve", "Camping Valve", "Hose", "Cast seater 3kg", "Cast seater 6kg", "Hose Clip","Control 3kg", "Control 6kg", "Stainless steel burner"]


    function addItem() {
      const {item, quantity, price,total}=input;
      
      const receiptStore ={item, quantity, price,total}; //transfer data  from input to receiptStore
    setRows((prev) =>[...prev, receiptStore]);        
     }
 
  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', minHeight: '110vh' }}>
      
       <Typography variant='h5' sx={heading}>Accessory Invoice</Typography>
      <Typography>Invoice no:{info.invoiceNo}</Typography>
      <Typography>Invoice date:{date}</Typography>
      {/* //Select accessory */}
      <FormControl  sx={{ marginTop: '20px' }}>
        <InputLabel id="accessory-select-label">Accessory</InputLabel>
        <Select
          labelId="accessory-select-label"
          id="accessory-select"
          value={accessory}
          label="Accessory"
          onChange={handleChange}
        >
          {AccessoryList.map((item,index) =>{ return <MenuItem value={item} key={index}>{item}</MenuItem>})}
          
          
        </Select>
        <FormHelperText>Select an accessory</FormHelperText>
      </FormControl>

      {/* TABLE */}
      <TableContainer sx={{ marginTop: '20px' }}>
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
            {/* Add table rows here */}
            <TableRow>
              <TableCell>
                <TextField variant="outlined"
                    size="small" value={input.item}
                    fullWidth></TextField>
              </TableCell>
              <TableCell>
                <TextField variant="outlined" size="small" fullWidth type='number' name='quantity' value={input.quantity} onChange={handleInput}></TextField>
              </TableCell>
              <TableCell>
                <TextField  variant="outlined" size="small" fullWidth name='price' value={input.price} onChange={handleInput}></TextField>
                </TableCell>
              <TableCell>
                <TextField variant="outlined" size="small" fullWidth name='total' value={input.total} >{input.total}  onChange={handleInput}</TextField>
                </TableCell>
            </TableRow>
            {/* More rows can be added similarly */}
          </TableBody>
        </Table>
      </TableContainer>

      {/* add item */}
      <Button onClick={addItem}>
        + Add Item
      </Button>

      {/* receipt */}
      <Paper>
        <Typography>
          Receipt
        </Typography>
              <TableContainer sx={{ marginTop: '20px' }}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price  (₦)</TableCell>
              <TableCell>Total  (₦)</TableCell>
            </TableRow>
          </TableHead>

          
            <TableBody>
           {rows.map((data,index) =>{
            return <TableRow key={index}>
           <TableCell>{data.item}</TableCell>
           <TableCell>{data.price}</TableCell>
           <TableCell>{data.quantity}</TableCell>
           <TableCell>{data.total}</TableCell>
            </TableRow>})}
            {/* More rows can be added similarly */}
            <TableRow>
              <TableCell><em className='font-bold'>Grand Total: ₦</em>{grandTotal}</TableCell>
            </TableRow>
          </TableBody>
          
        </Table>
      </TableContainer>
      <Button variant='contained' onClick={handleAccSave}>Save</Button>
      </Paper>
    </Paper>
  )
}

export default InvoiceHeading