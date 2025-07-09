import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from '@mui/material';




const Ledger = ({heading, accTotal, storeData, removeLedgerItem,storedReceipts,storedDom2R  ,storedDom1R, storedCyl}) => {
    
  const  totalAmount= storeData.reduce((acc, i) => acc + parseFloat(i.Amount || 0), 0);
// const grandTotal =rows.reduce((acc, item) => acc + parseFloat(item.total || 0 ), 0);
 const sumOfAccTotal =accTotal.reduce((acc,i) => acc + parseFloat(i || 0), 0);
 const sumOfD1Total = storedDom1R.reduce((acc,i) => acc + parseFloat(i.profit || 0), 0);
  const sumOfD2Total=storedDom2R.reduce((acc,i) => acc + parseFloat(i.profit || 0), 0);
  const sumOfCylTotal = storedCyl.reduce((acc, i) => acc + parseFloat(i.profit || 0), 0);  
// console.log(accTotal);



    
//summary data
const summary =[
    {product:'Accessories',
      noOfReceipts: storedReceipts.length,
      total: sumOfAccTotal
    },
    {product:'Domid I',
      noOfReceipts: storedDom1R.length,
      total:sumOfD1Total

    },
    {product:'Domid II',
      noOfReceipts:storedDom2R.length,
      total: sumOfD2Total
    },
    {product:'Cylinder',
      noOfReceipts: storedCyl.length,
      total: sumOfCylTotal

    }]
  
  
  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', minHeight: '110vh', width:'80%' }} >
      <Box sx={{marginBottom:'80px'}}>
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
       </TableContainer></Box>

       {/* sales analysis */}
       <Box>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Product</strong></TableCell>
                        <TableCell><strong>No of Receipts</strong></TableCell>
                        <TableCell><strong>Total</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {summary.map((item,i) =><TableRow key={i}>
                         <TableCell>{item.product}</TableCell>
                         <TableCell>{item.noOfReceipts}</TableCell>
                         <TableCell>{Number(item.total).toLocaleString('en-NG')}</TableCell>
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