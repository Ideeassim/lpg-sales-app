import React from 'react'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button, Typography, Box
} from '@mui/material';

const TankGas = ({heading}) => {

  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: 'auto', minHeight:'50vh' }}>
      <Typography variant='h5' sx={heading}>Tank Gas Invoice</Typography>
      <Typography>Invoice no:</Typography>
      <Typography gutterBottom>Invoice date:</Typography>
      <Box sx={{margin: '20px', display:'flex',gap:'20px'}}>
            <TextField label='Total Kg' size='small'/>
            <TextField label='No of bottles' size='small'/>
      </Box>
      <Box  sx={{margin: '20px', display:'flex',gap:'20px'}}>
        <TextField label='Cost Price' size='small'/>
        <TextField label='Sale Amount' size='small'/>
        
      </Box>
      <Typography>
            Profit:
        </Typography>
        <Button variant='contained'>Save</Button>
      </Paper>
  )
}

export default TankGas