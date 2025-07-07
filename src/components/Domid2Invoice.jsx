import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Button, Typography, Box
} from '@mui/material';
import { useState, useEffect } from 'react';

const Domid2Invoice = ({heading,setStoredDom2R, setDisplay,setStoreData, info, setInfo, date}) => {
const[d2Input, setD2Input]=useState({
  customerName:'',
  totalKg:'',
  costPrice:'',
  endUserPrice:'',
  profit:'',
  invoiceNo:'',
  date:''
})

//uptake of inputs
  function handleInput(event) {
    const{name, value}=event.target
    setD2Input(prev =>{
      const saveInput={...prev, [name]: value, invoiceNo: info.invoiceNo, date: date};
      const costPrice = parseFloat(saveInput.costPrice)|| 0; 
      const endUserPrice = parseFloat(saveInput.endUserPrice)|| 0; 
      if (saveInput.costPrice !=='' && saveInput.endUserPrice !=='') {
         saveInput.profit = endUserPrice - costPrice
      }
     
      return saveInput;

    })
  }

  //update info for ledger
useEffect(()=>setInfo(prev =>({...prev, Amount: d2Input.profit})), [d2Input.profit]);

//transfer of saved input to different components
function handleDomidSave() {

  setStoreData(prev =>[...prev, info]) //transfer to ledger

  setStoredDom2R(prev =>{ 
    return [...prev, d2Input]   // transfer to stored receipts
  });

  //reset input fields
  setD2Input({
     customerName:'',
  totalKg:'',
  costPrice:'',
  endUserPrice:'',
  profit:''
  });

  setDisplay('home')
}

  return (
     <Paper elevation={4}  sx={{ padding: '20px', margin: '20px', backgroundColor: 'white', height: '60vh', width:'60vw', color:'#2A4759' }}>
      
       <Typography variant='h5' sx={heading}>Domid Gas II Invoice</Typography>
      <Typography>Invoice no: {info.invoiceNo}</Typography>
      <Typography>Invoice date: {date}</Typography>
      <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}>
        <TextField label='Customer Name' size='small' onChange={handleInput} name='customerName'/>
        <TextField label='Total Kg' size='small'  onChange={handleInput} name='totalKg'/>
      </Box>
      <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}>
        <TextField label='End User Price' size='small' variant='outlined' onChange={handleInput} name='endUserPrice'/>
        <TextField label='Cost Price' size='small' variant='outlined' onChange={handleInput} name='costPrice'/>
        
      </Box>
    
      <TextField label='Profit' size='small' name='profit' onChange={handleInput} value={d2Input.profit} />
      <Button variant='contained' onClick={handleDomidSave}>Save</Button>
      </Paper>
  )
}

export default Domid2Invoice