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


const CylinderInvoice = () => {
   
  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: 'auto', minHeight:'50vh' }}>
      <Typography>Invoice no:</Typography>
      <Typography>Invoice date:</Typography>
      {/* //Select accessory */}
  

      {/* TABLE */}
      
    </Paper>
  )
}

export default CylinderInvoice;