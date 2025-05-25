import React from 'react'
import { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button, Typography, Box
} from '@mui/material';


const PracticeInv = ({account}) => {
const[rows, setRows]=useState([{
    item: account,
    quantity: '',
    price: '',
    total: 0
}]);
 
function handleChange(index, event) {
    const updatedRows = [...rows];

    const { name, value } = event.target;
    updatedRows[index][name] = value;
 const quantity= parseFloat(updatedRows[index].quantity) || 0;
 const price= parseFloat(updatedRows[index].price) || 0;

 updatedRows[index].total = quantity * price;
    // Update the total for the current row

    setRows(updatedRows);
    
}
//   const addRow = () => {
//     setRows([...rows, { item: '', quantity: '', price: '', total: 0 }]);
//   };


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
                return <TableBody>
                                <TableRow key={index}>
                                 <TableCell>
                                    <TextField id="outlined-basic" value={account} variant="outlined" disabled name='item'/>
                                </TableCell>
                                 <TableCell>
                                    <TextField id="outlined-basic" onChange={(e)=>handleChange(index, e)} variant="outlined" value={x.quantity} name='quantity' />
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
          <Box mt={2}>
        <Button variant="contained">
            + Add Item
        </Button>
      </Box>
        </TableContainer>
    </div>
  )
}

export default PracticeInv