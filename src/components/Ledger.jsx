import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from '@mui/material';




const Ledger = ({allExpArr, heading, accTotal, storeData, removeLedgerItem,storedReceipts,storedDom2R  ,storedDom1R, storedCyl}) => {
    
 
// const grandTotal =rows.reduce((acc, item) => acc + parseFloat(item.total || 0 ), 0);

//account total
 const sumOfAccTotal =accTotal.reduce((acc,i) => acc + parseFloat(i || 0), 0);
 const sumOfD1Total = storedDom1R.reduce((acc,i) => acc + parseFloat(i.profit || 0), 0);
  const sumOfD2Total=storedDom2R.reduce((acc,i) => acc + parseFloat(i.profit || 0), 0);
  const sumOfCylTotal = storedCyl.reduce((acc, i) => acc + parseFloat(i.profit || 0), 0);  

  //total expenses for each account
  const sumOfAccExp = allExpArr.reduce((acc,i) => acc + parseFloat(i.accExp || 0), 0); //for accessories
  const sumOfDomIExp =allExpArr.reduce((acc,i) => acc + parseFloat(i.dom1Exp  || 0), 0); //for domid1
  const sumOfDomIIExp =allExpArr.reduce((acc,i) => acc + parseFloat(i.dom2Exp  || 0), 0); //for domid2
  const sumOfCylExp =allExpArr.reduce((acc,i) => acc + parseFloat(i.cylExp  || 0), 0); //for cylinder gas


  //net profit for each account
  const accProfit = sumOfAccTotal - sumOfAccExp; // accessories profit
  const domIProfit = sumOfD1Total - sumOfDomIExp;// domid 1 profit
  const domIIProfit = sumOfD2Total - sumOfDomIIExp;// domid 2 profit
  const cylProfit = sumOfCylTotal - sumOfCylExp;// cylinder profit


    
//summary data
const summary =[
    {product:'Accessories',
      noOfReceipts: storedReceipts.length,
      total: sumOfAccTotal,
      expense: sumOfAccExp,
      profit: accProfit
    },
    {product:'Domid I',
      noOfReceipts: storedDom1R.length,
      total:sumOfD1Total,
      expense: sumOfDomIExp,
      profit: domIProfit

    },
    {product:'Domid II',
      noOfReceipts:storedDom2R.length,
      total: sumOfD2Total,
      expense: sumOfDomIIExp,
      profit: domIIProfit
    },
    {product:'Cylinder',
      noOfReceipts: storedCyl.length,
      total: sumOfCylTotal,
      expense: sumOfCylExp,
      profit: cylProfit

    }]
  
    //ledger total
     const  totalAmount= summary.reduce((acc, i) => acc + parseFloat(i.profit || 0), 0);
  
     //get month,year
     const today = new Date();
const month = today.getMonth() + 1; // getMonth() returns 0-11
const year = today.getFullYear();
const options = { month: 'long', year: 'numeric' };
const formatted = today.toLocaleDateString('en-NG', options);

  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', minHeight: '110vh', width:'80%' }} >
      {/* <Box sx={{marginBottom:'80px'}}>
       <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell >
                        Invoice No                        
                    </TableCell>
                    <TableCell>
                        Invoice Date                        
                    </TableCell>
                    <TableCell>
                        Account                        
                    </TableCell>
                    <TableCell>
                        Amount (₦)
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                    {storeData?.map((data,index) =>{
                        return  <TableRow key={index}>
                        <TableCell>{data.invoiceNo}</TableCell>
                        <TableCell>{data.invoiceDate}</TableCell>
                        <TableCell>{data.Account}</TableCell>
                        <TableCell>{Number(data.Amount).toLocaleString('en-NG')}</TableCell>
                        <TableCell><Button onClick={()=>{removeLedgerItem(index)}}>remove</Button></TableCell>
                    </TableRow>
                    })}
                   
                </TableBody>
            </Table>
       </TableContainer></Box> */}

       {/* sales analysis */}
       <Box>
        <Typography variant='h5' gutterBottom>{formatted}</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Account</strong></TableCell>
                        <TableCell><strong>No of Receipts</strong></TableCell>
                        <TableCell><strong>Income</strong></TableCell>
                        <TableCell><strong>Expense</strong></TableCell>
                        <TableCell><strong>Profit</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {summary.map((item,i) =><TableRow key={i}>
                         <TableCell>{item.product}</TableCell>
                         <TableCell>{item.noOfReceipts}</TableCell>
                         <TableCell>{Number(item.total).toLocaleString('en-NG')}</TableCell>
                         <TableCell>{item.expense}</TableCell>
                         <TableCell>{item.profit}</TableCell>
                         </TableRow>)}
                        
                    
                </TableBody>
            </Table>
        </TableContainer>
        <Typography variant='h6' sx={{color:'#FF7601', marginTop:'40px'}}>Ledger Total: ₦{Number(totalAmount).toLocaleString('en-NG')}</Typography>
       </Box>
    </Paper>
  )
}

export default Ledger