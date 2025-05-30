import React from 'react'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button, Typography, Box
} from '@mui/material';

const DomidInvoice = ({heading}) => {
  return (
     <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: '60vh', width:'60vw' }}>
      
       <Typography variant='h5' sx={heading}>Domid Gas I Invoice</Typography>
      <Typography>Invoice no:</Typography>
      <Typography>Invoice date:</Typography>
      <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}>
        <TextField label='Total Kg' size='small'/>
        <TextField label='No of bottles' size='small'/>
      </Box>
      <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}>
        <TextField label='Unit Price' size='small' variant='outlined'/>
        <TextField label='End User Price' size='small' variant='outlined'/>
      </Box>
      <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}>
        <TextField label='Purchase Amount' size='small' variant='outlined'/>
        <TextField label='Cash Given' size='small' variant='outlined'/>
      </Box>
      <Typography>Profit:</Typography>
      <Button variant='contained'>Save</Button>
      </Paper>
  )
}

export default DomidInvoice