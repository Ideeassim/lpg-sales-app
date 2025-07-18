import React, {useEffect, useState} from 'react'
import { Paper, Box,Typography,Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Fab from '@mui/material/Fab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { div } from 'framer-motion/client';

const Expense = ({heading, storeData, date, expenseData, setExpense,  setAllExp, allExp, setArr, allExpArr}) => {

  const accounts = ['accessories', 'domid I', 'domid II', 'cylinder gas'];
  const[addExpense, setAddExpense]=useState(false)
 
    const[expAccount, setExpAccount]=useState('')
    const[expInput, setExpInput]=useState({
      Date:'',
      account: '',
      amount:'',
      narration:''
    })

    const totalAmount = storeData.reduce((acc, i) => acc + parseFloat(i.Amount  || 0), 0);

     // menu
     const handleChange = (event) => {
    setExpAccount(event.target.value);
  };
//handle Input
function handleInput(event) {
  const{name,value}=event.target
  setExpInput(prev => ({...prev, [name]: value, account: expAccount}))
}

      //save expense
      function handleSave() {
        const{Date, account, amount, narration} = expInput
        const dataInput ={Date, account, amount, narration}
        setExpense(prev =>[...prev, dataInput]);
        
        //each account expense        
        //   if (account === 'accessories' && amount !=='') {
        //     const updated = {...allExp, accExp: amount}
        //    setAllExp(updated)
        //  setArr(prev=>[...prev, updated])  
        // }
          
        if (amount !=='') {
          const updatedAllExp={...allExp};
          
          switch (account) {
            case 'accessories':
              updatedAllExp.accExp = amount
              break;
              
            case 'domid I' :
                updatedAllExp.dom1Exp =amount
                break;
            case 'domid II':
              updatedAllExp.dom2Exp=amount
              break;
            case 'cylinder gas':
              updatedAllExp.cylExp =amount
              break;
          
            default:
              break;
          }

          setAllExp(updatedAllExp);
          setArr(prev => [...prev, updatedAllExp]);
        };
          
        setAddExpense(false)
        setExpInput({
      Date:'',
     account:'',
      amount:'',
      narration:''})               
        
      } 
     
   
  return (
     <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: '110vh', width:'80%' }} >
       <Box sx={{display:'flex', justifyContent:'space-between', width:'60%'}}>       
             
            <Typography variant='h6' ><Fab color="#FF7601" aria-label="add" sx={{marginRight:'5px'}} onClick={()=> (setAddExpense(true), setExpInput(prev =>({...prev, Date:date})))}>
                    <AddIcon />
            </Fab> Add Expense</Typography>     
           
        <Typography variant='h6' sx={{color:'#FF7601', paddingTop:'10px'}}>Income: {totalAmount}</Typography>
        </Box>
        <Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                           <TableCell>Date</TableCell>
                            <TableCell>Account</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Narration</TableCell>                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {expenseData.length>0 && expenseData.map((input, index) => <TableRow key={index}>
                        <TableCell>{input.Date}</TableCell>
                        <TableCell>{input.account}</TableCell>
                        <TableCell>{input.amount}</TableCell>
                        <TableCell>{input.narration}</TableCell>
                        </TableRow>) }
                    </TableBody>
                </Table>
            </TableContainer>
          
        </Box>
       {/* pop up */}
        {addExpense &&( <Box sx={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10
        }}> <Paper sx={{width: '60%'}}>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
            
            <Button onClick={()=> (setAddExpense(false))}>< CancelPresentationIcon/></Button></Box> <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                            <TableCell>Account</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Narration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{expInput.Date}</TableCell>
                        <TableCell>
                           <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                          <InputLabel id="demo-select-small-label">Account</InputLabel>
                                 <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={expAccount}
       
        label="Account"
        onChange={handleChange}
      >
        
       {accounts.map((acct,i) =><MenuItem value={acct} key={i}>{acct}</MenuItem> )}
        
      </Select></FormControl>
                        </TableCell>
                        <TableCell><TextField size='small' onChange={handleInput} name='amount' value={expInput.amount}></TextField></TableCell>
                        <TableCell><TextField size='small' multiline onChange={handleInput} name='narration' value={expInput.value} ></TextField></TableCell>
                      </TableRow>
                      
                    </TableBody>
                </Table><Button onClick={handleSave}>add</Button>
            </TableContainer>
        </Paper>
       
        </Box>)}
        {allExpArr && allExpArr.map((item,i) => <div key={i}>
        <p>account:{item.accExp}</p>
      </div>)}
    </Paper>
  )
}

export default Expense