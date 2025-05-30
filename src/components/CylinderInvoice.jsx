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


const CylinderInvoice = ({heading}) => {
   
  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: 'auto', minHeight:'50vh' }}>
       <Typography variant='h5' sx={heading}>Cylinder Gas Invoice</Typography>
      <Typography>Invoice no:</Typography>
      <Typography gutterBottom>Invoice date:</Typography>
      <hr className='text-gray-300 mb-5'/>
      <Box sx={{marginBottom:'20px'}}>
      <TextField  label="Gas Filled" variant="outlined" size='small' />
      <TextField  label="Gas Dispensed" variant="outlined" size='small'
    />
    <Typography>Gas Difference:</Typography>
    </Box>
    <Box>
      <TextField size='small' label='Cost Price'/>
      <TextField size='small' label='Sales Amount'/>
      <Typography>Profit:</Typography>
    </Box>
    <Button variant='contained'>Save</Button>
    </Paper>
  )
}

export default CylinderInvoice;