import React from 'react'
import { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button, Typography, Box
} from '@mui/material';


const PracticeInv = ({accessory, rows, setRows, setAddBtn, setReceiptRows, receiptRows}) => {

 
function handleChange(index, event) {
    const {name, value} = event.target;
   setRows((prev) => ([{...prev, [name]:value}]));
    
}

 function handleClick() {
  console.log(rows);
  // if (rows[0].quantity.trim() === '' || rows[0].price.trim() === '') {
    
  //    setReceiptRows((prevRows) => [...prevRows, rows]);
  // }
 
  // setAddBtn(true);
 
  // setRows([{ item: "", quantity: '', price: '', total: 0 }]);
  // console.log(receiptRows);
  
 }


  return (
    <div>
       <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price (₦)</TableCell>
              <TableCell>Total (₦)</TableCell>
            </TableRow>
          </TableHead>
          
            {/* Rows will be dynamically generated here */}
            {rows.map((x,index) =>{
                return <TableBody key={index}>
                                <TableRow key={index}>
                                 <TableCell>
                                    <TextField id="outlined-basic" value={accessory} variant="outlined" disabled name='item'/>
                                </TableCell>
                                 <TableCell>
                                    <TextField id="outlined-basic" type="number" onChange={(e)=>handleChange(index, e)} variant="outlined" value={x.quantity} name='quantity' />
                                </TableCell>
                                 <TableCell>
                                    <TextField id="outlined-basic"  onChange={(e)=>handleChange(index, e)} variant="outlined" value={x.price} name='price'/>
                                </TableCell>
                                 <TableCell>
                                    <TextField id="outlined-basic" onChange={(e)=>handleChange(index, e)} variant="outlined" value={x.total} name='total' />
                                </TableCell>
                         </TableRow>
                        
                         
                         </TableBody>
            })}
         
        </Table>
          <Box m={2}>
        <Button variant="contained" onClick={handleClick}>
            + Add Item
        </Button>
      </Box>
        </TableContainer>
    </div>
  )
}

export default PracticeInv