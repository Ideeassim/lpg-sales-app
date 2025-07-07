import React, { useState } from 'react'
import { Paper, Box,Typography,Button, TextField } from '@mui/material';
import CanceledR from './canceledR';




const StoredReceipts = ({storedReceipts, heading, deleteItem, cancelledR, cancelledD2,cancelledD1,deleteD1R, deleteD2R, restoreItem, restoreD1item, restoreD2item, storedDom2R  ,storedDom1R, removeItem}) => {
const[show, setShow]=useState(false);
const receiptStyle ={
  padding: '20px',
  color: '#393E46',
  margin:'20px',
  fontSize:'1.1rem'
}

             

 const fields=[
  {key: 'Date', label:'date'},
  {key: 'Invoice No', label:'invoiceNo'},
  {key: 'Total Kg', label:'totalKg'},
  {key: 'No of Bottles', label:'noOfBots'},
  {key: 'Unit Price', label:'unitPrice'},
  {key: 'End User Price', label:'endUserPrice'},
  {key: 'Purchase Amount', label:'purchaseAmount'},
  {key: 'Cash Given', label:'cashGiven'},
  {key: 'Profit', label:'profit'}
 ]

  return (
    <Paper elevation={4} sx={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5', height: '110vh', width:'80%' }} >
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button  variant='h6' sx={{color:'#FF7601', fontSize:'1.3rem'}} onClick={()=>setShow(false) } >
                  Receipts
            </Button>
            <Button href='#' onClick={()=>setShow(true) } sx={{justifySelf:'flex-end', color:'#393E46'}}>
                 view cancelled receipts
             </Button>
        </Box>

        {/* main box */}
       { !show && <Box>
          <hr style={{color:'#DDDDDD'}}/>
          { storedReceipts.map((eachArray, index)=>{ 
        return <Paper key={index} sx={receiptStyle}>
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
          return <Paper key={index} sx={receiptStyle}>
           {fields.map((it,i) => <p key={i}><span  style={{color:'#948979'}}>{it.key}:      </span>{item[it.label]}</p>)}
            <Button onClick={()=>deleteD1R(index)}>remove</Button>
          </Paper>
        })}

        {/* domid2 receipts */}
        {storedDom2R.map((item,index)=>{
          return <Paper key={index}  sx={receiptStyle}>
            <p><span style={{color:'#948979'}}>Date:</span> {item.date}</p>
             <p>invoiceNo: {item.invoiceNo}</p>
                <p>Customer Name: {item.customerName}</p>                                      
                <p>Total Kg: {item.totalKg}</p>                                      
                <p>Cost Price: {item.costPrice}</p>                                      
                <p>End User Price: {item.endUserPrice}</p>                                      
                <p>profit: {item.profit}</p>     
                <Button onClick={()=>deleteD2R(index)}>remove</Button>                                 
          </Paper>
        })}
          </Box> }
        
        {/* cancelled receipts */}
        {show && <Box>
              <Paper  sx={{ padding: '20px', margin: '20px', backgroundColor: 'white', height: '90vh', width:'60vw' }}>
                  <CanceledR cancelledR={cancelledR} restoreItem={restoreItem} restoreD1Item={restoreD1item} restoreD2Item={restoreD2item} heading={heading} cancelledD1={cancelledD1} cancelledD2={cancelledD2}/>
              </Paper>
        </Box>}
       
      </Paper>
  )
}

export default StoredReceipts