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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Receipts from './Receipts';

const InvoiceHeading = ({dbSave, heading, grandTotal, setGrandTotal,rows,setRows, handleAccSave, date,info,setInfo, indexCheck, setStoredReceipts}) => {
    const [accessory, setAccessory] = useState('');
    
  const [input, setInput] = useState({
    item: accessory,
    quantity: '',
    price: '',
    total: '',
    invoiceNo: '',// This will be calculated
    account:'accessories'
  });

 
 
  

 useEffect(() =>{
   const grandTotal =rows.reduce((acc, item) => acc + parseFloat(item.total || 0 ), 0);
      setGrandTotal(grandTotal)}, [rows]);
     
  const handleChange = (event) => {
    const value= event.target.value
    setAccessory(value);
    setInput((prev)=>({...prev, item:value, invoiceNo: info.invoiceNo}))
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
      const {item, quantity, price,total, invoiceNo, account}=input;
      
      const receiptStore ={item, quantity, price,total, invoiceNo, account}; //transfer data  from input to receiptStore

      //validate fields
      if (!item || !quantity || !price || !total) {
        // setBtnState(false);
         alert('Please enter all fields and select an accessory!')

      }
      //update Rows
      if(item || quantity || price || total){
                 setRows((prev) =>[...prev, receiptStore]);    
                
                 setInfo((prev) =>({...prev, item,quantity,total, invoiceNo, account}))
                // setBtnState(true);
      }

         //reset Input
          setInput( {item: '',
          quantity: '',
           price: '',
           total: ''});
            setAccessory('')
     }
//  function indexCheck(indexToRemove) {
//   setRows(prevValue => prevValue.filter((_, i) =>i !== indexToRemove));
// }
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
                    fullWidth InputProps={{ readOnly: true }}></TextField>
              </TableCell>
              <TableCell>
                <TextField variant="outlined" size="small" fullWidth type='number' name='quantity' value={input.quantity} onChange={handleInput}></TextField>
              </TableCell>
              <TableCell>
                <TextField  variant="outlined" size="small" fullWidth name='price' value={input.price} onChange={handleInput}></TextField>
                </TableCell>
              <TableCell>
                <TextField variant="outlined" size="small" fullWidth name='total' value={input.total}  InputProps={{ readOnly: true }}>{input.total}</TextField>
                </TableCell>
            </TableRow>
            {/* More rows can be added similarly */}
          </TableBody>
        </Table>
      </TableContainer>

      {/* add item */}
      {/* <Button onClick={addItem}>
        + Add Item
      </Button> */}
      <Fab sx={{backgroundColor:'orange', color:'white', margin:'20px'}} aria-label="add" onClick={addItem} size='small'>
        <AddIcon />
      </Fab>

      {/* receipt */}
      <Receipts dbSave={dbSave}  rows={rows} indexCheck={indexCheck} heading={heading} grandTotal={grandTotal} handleAccSave={handleAccSave}/>
    
    </Paper>
  )
}

export default InvoiceHeading