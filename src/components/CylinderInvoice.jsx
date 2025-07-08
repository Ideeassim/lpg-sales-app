import React, { useEffect, useState } from 'react';

import {
  
  Paper, TextField, Button, Typography, Box
} from '@mui/material';


const CylinderInvoice = ({heading, info, date, setInfo, setStoreData, setStoredCyl, setDisplay}) => {

  const [cyInput, setCyInput]=useState({
    gasFilled:'',
    gasDis:'',
    gasDiff:'',
    costPrice:'',
    salesAmount:'',
    profit:'',
    invoiceNo:'',
  date:''
  })

  //uptake of input
  function handleInput(event) {
    const {name, value}=event.target
    setCyInput(prev => {
      const saveInput ={...prev, [name]: value, invoiceNo: info.invoiceNo, date: date};
      const gasFilled = parseFloat(saveInput.gasFilled) || 0;
      const gasDis = parseFloat(saveInput.gasDis) || 0;
      const costPrice = parseFloat(saveInput.costPrice) || 0;
      const salesAmount = parseFloat(saveInput.salesAmount) || 0;
if (saveInput.gasDis !=='' && saveInput.gasFilled !=='') {
  saveInput.gasDiff = gasFilled - gasDis
}

       if (saveInput.costPrice !=='' && saveInput.salesAmount !=='') {
         saveInput.profit = salesAmount - costPrice
      }
      return saveInput
    }
    )
  };
  //update info for ledger
useEffect(()=>setInfo(prev =>({...prev, Amount: cyInput.profit})), [cyInput.profit]);

 //transfer of saved input to different components
function handleCylSave() {

  setStoreData(prev =>[...prev, info]) //transfer to ledger

  setStoredCyl(prev =>{ 
    return [...prev, cyInput]   // transfer to stored receipts
  });

  //reset input fields
  setCyInput({
    gasFilled:'',
    gasDis:'',
    gasDiff:'',
    costPrice:'',
    salesAmount:'',
    profit:''
  });

  setDisplay('home')
}
   
  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: 'auto', minHeight:'50vh' }}>
       <Typography variant='h5' sx={heading}>Cylinder Gas Invoice</Typography>
      <Typography>Invoice no: {info.invoiceNo}</Typography>
      <Typography gutterBottom>Invoice date:{date}</Typography>
      <hr className='text-gray-300 mb-5'/>
      <Box sx={{marginBottom:'20px'}}>
      <TextField  label="Gas Filled" variant="outlined" size='small' name='gasFilled' onChange={handleInput}/>
      <TextField  label="Gas Dispensed" variant="outlined" size='small' name='gasDis' onChange={handleInput}
    />
    <Typography>Gas Difference:{cyInput.gasDiff}</Typography>
    </Box>
    <Box>
      <TextField size='small' label='Cost Price' name='costPrice' onChange={handleInput}/>
      <TextField size='small' label='Sales Amount' name='salesAmount' onChange={handleInput}/>
      <Typography>Profit:{cyInput.profit}</Typography>
    </Box>
    <Button variant='contained' onClick={handleCylSave}>Save</Button>
    </Paper>
  )
}

export default CylinderInvoice;