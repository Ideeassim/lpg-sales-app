import React, { useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,Button, TextField } from '@mui/material';
import CanceledR from './canceledR';




const StoredReceipts = ({storedReceipts, heading, deleteItem, cancelledR, restoreItem, storeData,storedDom1R, removeItem}) => {

  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: '110vh', width:'80%' }} >
        <Typography  variant='h6' sx={heading}>
          Receipt
        </Typography>
          {storedReceipts.map((eachArray, index)=>{ 
        return <Paper key={index} sx={{margin: '20px'}}>
            {eachArray.map((data, i) => {
                return <div key={i}>
                  <div>
                     <p>item: {data.item}</p>
                    <p>price:{data.price}</p>
                    <p>quantity:{data.quantity}</p>
                    <p>invoiceNo: {data.invoiceNo}</p></div>
                
                        </div>
            })} <Button onClick={()=>deleteItem(index)}>remove</Button>   
        </Paper>})}
        <a href='#' onClick={()=>setShown(false) }>
        view cancelled receipts
        </a>
        <Paper>
            <CanceledR cancelledR={cancelledR} restoreItem={restoreItem}/>
        </Paper>

        {/* domid1 receipts */}
        {storedDom1R.map((item,index) => {
          return <Paper key={index} sx={{fontWeight:'400', margin:'20px'}}>
            <p>Total Kg: {item.totalKg}</p>
            <p>No of Bottles: {item.noOfBots}</p>
            <p>Unit Price: {item. unitPrice}</p>
            <p>End User Price: {item.endUserPrice}</p>
            <p>Purchase Amount: {item.purchaseAmount}</p>
            <p>Cash Given: {item.cashGiven}</p>
            <p>Profit: {item.profit}</p>
            <Button onClick={()=>removeItem(index)}>remove</Button>
          </Paper>
        })}
      </Paper>
  )
}

export default StoredReceipts