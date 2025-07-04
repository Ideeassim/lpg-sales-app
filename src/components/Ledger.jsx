import React, { useEffect, useState } from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';




const Ledger = ({ledgerTotal, storeData, removeLedgerItem}) => {
    
  const  totalAmount= storeData.reduce((acc, i) => acc + parseFloat(i.Amount || 0), 0);
// const grandTotal =rows.reduce((acc, item) => acc + parseFloat(item.total || 0 ), 0);
    
  
  
  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: '110vh', width:'80%' }} >
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
                        Amount
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                    {storeData?.map((data,index) =>{
                        return  <TableRow key={index}>
                        <TableCell>{data.invoiceNo}</TableCell>
                        <TableCell>{data.invoiceDate}</TableCell>
                        <TableCell>{data.Account}</TableCell>
                        <TableCell>{data.Amount}</TableCell>
                        <TableCell><Button onClick={()=>{removeLedgerItem(index)}}>remove</Button></TableCell>
                    </TableRow>
                    })}
                   
                </TableBody>
            </Table>
       </TableContainer><p>Ledger Total:{totalAmount}</p>
    </Paper>
  )
}

export default Ledger