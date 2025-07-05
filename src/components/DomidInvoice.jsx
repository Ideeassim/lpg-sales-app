import React, { useState, useEffect } from 'react'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button, Typography, Box
} from '@mui/material';

const DomidInvoice = ({heading, info,date, setStoreData, setInfo, setDisplay,setStoredDom1R}) => {

  //state for input fields
  const[domidInput, setDomidInput]= useState({
    totalKg:'',
    noOfBots:'',
    unitPrice:'',
    endUserPrice:'',
    purchaseAmount:'',
    cashGiven:'',
    profit:''
  })

  function handleInput(event) {
    const{name, value}=event.target;
    setDomidInput(prev =>{
      const saveInput ={...prev, [name]: value};
      if (saveInput.totalKg !=='') {
        const totalKg= parseFloat(saveInput.totalKg) || 0;
        saveInput.noOfBots = totalKg/12.5
      } 
      if (saveInput.purchaseAmount !=='' && saveInput.cashGiven !=='') {
              const purchaseAmount=parseFloat(saveInput.purchaseAmount)|| 0;
      const cashGiven=parseFloat(saveInput.cashGiven)|| 0;
      saveInput.profit = cashGiven - purchaseAmount || 0;
      }


      return saveInput
    });
 
  }
   useEffect(()=>setInfo(prev =>({...prev, Amount: domidInput.profit})), [domidInput.profit]);

  function handleDomidSave () {
    //transfer to ledger
    setStoreData(prev => [...prev, info]);

    //transfer to storedReceipts
    setStoredDom1R(prev => [...prev, domidInput])

    //reset input
    setDomidInput({
    totalKg:'',
    noOfBots:'',
    unitPrice:'',
    endUserPrice:'',
    purchaseAmount:'',
    cashGiven:'',
    profit:''
    });
    setDisplay('home')
  }
  return (
     <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: '60vh', width:'60vw' }}>
      
       <Typography variant='h5' sx={heading}>Domid Gas I Invoice</Typography>
      <Typography>Invoice no: {info.invoiceNo}</Typography>
      <Typography>Invoice date:{date}</Typography>
      <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}>
        <TextField label='Total Kg' name='totalKg' size='small' type='number' onChange={handleInput} value={domidInput.totalKg}/>
        <TextField label='No of bottles' size='small' name='noOfBots' value={domidInput.noOfBots}/>
      </Box>
      <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}>
        <TextField label='Unit Price' name='unitPrice' size='small' variant='outlined' type='number'  onChange={handleInput} value={domidInput.unitPrice}/>
        <TextField label='End User Price' name='endUserPrice' size='small' type='number' variant='outlined'  onChange={handleInput} value={domidInput.endUserPrice}/>
      </Box>
      <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}>
         <TextField label='Cash Given' name='cashGiven' type='number' size='small' variant='outlined' onChange={handleInput} value={domidInput.cashGiven}/>
       <TextField label='Purchase Amount' name='purchaseAmount' type='number' size='small' variant='outlined'  onChange={handleInput} value={domidInput.purchaseAmount}/>
      
      <TextField  label='Profit' name='profit' value={domidInput.profit} size='small' variant='outlined' onChange={handleInput} /> </Box>
      <Button variant='contained' onClick={handleDomidSave} sx={{marginTop:'20px'}}>Save</Button>
      </Paper>
  )
}

export default DomidInvoice;