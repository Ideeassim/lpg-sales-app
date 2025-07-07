import React from 'react'
import { Button, Box, Typography } from '@mui/material'

const CanceledR = ({cancelledR, cancelledD2, cancelledD1, restoreItem, restoreD1Item,restoreD2Item, heading}) => {


  return (
    <div>
        <Box >
          <Typography variant='h6' sx={heading}>Canceled Receipts</Typography>
            {cancelledR.length>0 && (cancelledR.map((x, i)=>
            <div key={i}>{x.map((x2, index) =>
            <div key={index}><p>item: {x2.item}</p>
                    <p>price:{x2.price}</p>
                    <p>quantity:{x2.quantity}</p>                   
                    </div>)}
                   <Button onClick={()=>{restoreItem(i)}}>restore</Button>
                    </div>))}

                    {/* array for domid1 */}
            {cancelledD1.length>0 && (cancelledD1.map((item, i)=>
            
            <div key={i}>
               <p>Total Kg: {item.totalKg}</p>
            <p>No of Bottles: {item.noOfBots}</p>
            <p>Unit Price: {item. unitPrice}</p>
            <p>End User Price: {item.endUserPrice}</p>
            <p>Purchase Amount: {item.purchaseAmount}</p>
            <p>Cash Given: {item.cashGiven}</p>
            <p>Profit: {item.profit}</p>                
                          <Button onClick={()=>{restoreD1Item(i)}}>restore</Button>
                    </div>))}

                    {/* array for domid2 */}
            {cancelledD2.length>0 && (cancelledD2.map((item, i)=>
            
            <div key={i}>
              <p>Customer Name: {item.customerName}</p>                                      
                <p>Total Kg: {item.totalKg}</p>                                      
                <p>Cost Price: {item.costPrice}</p>                                      
                <p>End User Price: {item.endUserPrice}</p>                                      
                <p>profit: {item.profit}</p>              
                    
                   <Button onClick={()=>{restoreD2Item(i)}}>restore</Button>
                    </div>))}
                    
                
                    </Box>

    </div>
  )
}

export default CanceledR