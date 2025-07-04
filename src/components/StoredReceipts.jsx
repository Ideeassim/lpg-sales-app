import React, { useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,Button } from '@mui/material';
import CanceledR from './canceledR';




const StoredReceipts = ({storedReceipts, heading, deleteItem, cancelledR, restoreItem, storeData={storeData}}) => {
    const[shown, setShown]=useState(true)
  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: '110vh', width:'80%' }} >
        <Typography  variant='h6' sx={heading}>
          Receipt
        </Typography>
          {shown && storedReceipts.map((eachArray, index)=>{ 
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
      </Paper>
  )
}

export default StoredReceipts