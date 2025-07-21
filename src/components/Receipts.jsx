import React, { useEffect } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,Button } from '@mui/material';

const Receipts = ({dbSave, rows, indexCheck, heading, grandTotal, handleAccSave}) => {
 



  return (
    
      <Paper sx={{padding:'20px'}} >
        <Typography  variant='h6' sx={heading}>
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
           {rows && rows.length > 0 ? (rows.map((data,index) =>{
            return <TableRow key={index} id={index} onClick={indexCheck}>
           <TableCell>{data.item}</TableCell>
           <TableCell>{data.quantity}</TableCell>
           <TableCell>{data.price}</TableCell>
           <TableCell>{data.total}</TableCell>
           <TableCell><Button onClick={()=>indexCheck(index)}>Remove</Button>
</TableCell>
           
            </TableRow>}))  : (<TableRow><TableCell>No data</TableCell></TableRow>
  
)}

          
          </TableBody>
          
        </Table>
      </TableContainer>
      <hr className='text-gray-100'/>
      <em className='font-bold'>Grand Total: ₦ {grandTotal}</em>
      <hr  className='text-gray-100'/>
      <Button variant='contained' onClick={()=>handleAccSave()} sx={{margin:'20px'}}>Save</Button>
      </Paper>
  )
}

export default Receipts