import React, { useState } from 'react'
import { Paper, Box,Typography,Button, TextField } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CanceledR from './canceledR';




const StoredReceipts = ({storedReceipts, heading, deleteItem, cancelledR, cancelledD2,cancelledD1,deleteD1R, deleteD2R, restoreItem, restoreD1item, restoreD2item, storedDom2R  ,storedDom1R, storedCyl, deleteCyl, cancelledCyl, restoreCyItem}) => {
console.log(storedCyl);

const[show, setShow]=useState('none');

  // menu
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
 
   
  };
  const handleClose = (event) => {
    setAnchorEl(null); 
     const item =event.target.innerText.trim();
if (item ==='accessories') {
    setShow('accessories')
} else if (item ==='domid I') {
    setShow('domid I')
}else if (item ==='domid II') {
    setShow('domid II')
}else if (item ==='cylinder gas') {
    setShow('cylinder gas')
}else if (item ==='canceled receipts') {
    setShow('canceled')
}
  };

  const accounts = ['accessories', 'domid I', 'domid II', 'cylinder gas', 'canceled receipts' ];

  

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
            <Button  variant='h6' sx={{color:'#FF7601', fontSize:'1.3rem'}}
                   id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
            >
                  Receipts
            </Button>

             <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
            sx: {
        backgroundColor: '#393E46', // menu background
        color: '#FFFFFF',           // default text color for menu
      },
          },
        }}
      >{accounts.map((item, i) => <MenuItem onClick={handleClose}  key={i} sx={{
        color: '#FF7601', // text color
        '&:hover': {
          backgroundColor: '#333333', // hover background
          color: '#FFF',
        }
      }}>{item}</MenuItem>)}
        
            </Menu>

            {/* <Button href='#' onClick={()=>setShow(true) } sx={{justifySelf:'flex-end', color:'#393E46'}}>
                 view cancelled receipts
             </Button> */}
        </Box>

        {/* accessories box */}
       { show == 'accessories' && <Box>
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
           </Box> }
        

         {/* domid1 receipts */}
          { show === 'domid I' && <Box>
          <hr style={{color:'#DDDDDD'}}/> 
        {storedDom1R.map((item,index) => {
          return <Paper key={index} sx={receiptStyle}>
           {fields.map((it,i) => <p key={i}><span  style={{color:'#948979'}}>{it.key}:      </span>{item[it.label]}</p>)}
            <Button onClick={()=>deleteD1R(index)}>remove</Button>
          </Paper>
        })}
        </Box>}

        {/* domid2 receipts */}
          { show === 'domid II' && <Box>
          <hr style={{color:'#DDDDDD'}}/>
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
       </Box>}
        {/* cylinder gas receipts */}
          { show === 'cylinder gas' && <Box>
          <hr style={{color:'#DDDDDD'}}/>
        {storedCyl.map((item,index)=>{
          return <Paper key={index}  sx={receiptStyle}>
            <p><span style={{color:'#948979'}}>Date:</span> {item.date}</p>
             <p>invoiceNo: {item.invoiceNo}</p>
                <p>Gas Filled: {item.gasFilled}</p>                                      
                <p>Gas Dispensed: {item.gasDis}</p>                                      
                <p>Gas Difference: {item.gasDiff}</p>                                      
                <p>Cost Price: {item.costPrice}</p>                                      
                <p>Sales Amount: {item.salesAmount}</p>                                      
                <p>profit: {item.profit}</p>     
                <Button onClick={()=>deleteCyl(index)}>remove</Button>                                 
          </Paper>
        })}
       </Box>}

        {/* cancelled receipts */}
        {show ==='canceled' && <Box>
              <Paper  sx={{ padding: '20px', margin: '20px', backgroundColor: 'white', height: '90vh', width:'60vw' }}>
                  <CanceledR cancelledR={cancelledR} restoreItem={restoreItem} restoreD1Item={restoreD1item} restoreD2Item={restoreD2item} heading={heading} cancelledD1={cancelledD1} cancelledD2={cancelledD2} cancelledCyl={cancelledCyl}  restoreCyItem={ restoreCyItem}/>
              </Paper>
        </Box>}
       
      </Paper>
  )
}

export default StoredReceipts