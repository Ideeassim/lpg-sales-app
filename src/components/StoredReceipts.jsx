import React, { useState } from 'react'
import { Paper, Box,Typography,Button, TextField } from '@mui/material';
import CanceledR from './canceledR';




const StoredReceipts = ({storedReceipts, heading, deleteItem, cancelledR, restoreItem,storedDom2R  ,storedDom1R, removeItem}) => {
const[show, setShow]=useState(false);

  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: '110vh', width:'80%' }} >
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography  variant='h6' sx={heading}>
                  Receipts
            </Typography>
            <Button href='#' onClick={()=>setShow(true) } sx={{justifySelf:'flex-end', color:'#393E46'}}>
                 view cancelled receipts
             </Button>
        </Box>

        {/* main box */}
         <Box>
          <hr style={{color:'#B6B09F'}}/>
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

        {/* domid2 receipts */}
        {storedDom2R.map((item,index)=>{
          return <Paper key={index} >
                <p>Customer Name: {item.customerName}</p>                                      
                <p>Total Kg: {item.totalKg}</p>                                      
                <p>Cost Price: {item.costPrice}</p>                                      
                <p>End User Price: {item.endUserPrice}</p>                                      
                <p>profit: {item.profit}</p>     
                <Button onClick={()=>removeItem(index)}>remove</Button>                                 
          </Paper>
        })}
          </Box> 
        
        {/* cancelled receipts */}
        {show && <Box>
              <Paper  sx={{ padding: '20px', margin: '20px', backgroundColor: 'white', height: '90vh', width:'60vw' }}>
                  <CanceledR cancelledR={cancelledR} restoreItem={restoreItem} heading={heading}/>
              </Paper>
        </Box>}
       
      </Paper>
  )
}

export default StoredReceipts