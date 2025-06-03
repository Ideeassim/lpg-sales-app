import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';




const Ledger = ({ledgerTotal, storeData}) => {
      console.log(storeData);
   

    
  
  
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
                  
                    </TableRow>
                    })}
                   
                </TableBody>
            </Table>
       </TableContainer><p>Ledger Total:{ledgerTotal}</p>
    </Paper>
  )
}

export default Ledger