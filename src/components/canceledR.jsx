import React from 'react'
import { Button, Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';


const CanceledR = ({cancelledR, cancelledD2, cancelledD1, restoreItem, restoreD1Item,restoreD2Item, heading, cancelledCyl, restoreCyItem}) => {
const itemBoxStyle = {
  backgroundColor: '#ffe6e6',
  border: '1px solid #ff4d4d',
  padding: '15px',
  marginBottom: '20px',
  borderRadius: '10px',
};

  return (
    <div>
        <Box >
          <Typography variant='h6' sx={heading}>Canceled Receipts</Typography>
          <AnimatePresence>
            
            {cancelledR.length>0 && (cancelledR.map((x, i)=>
            <motion.div
              key={`acc-${i}`}
              style={itemBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            <div key={i}>{x.map((x2, index) =>
            <div key={index}><p>item: {x2.item}</p>
                    <p>price:{x2.price}</p>
                    <p>quantity:{x2.quantity}</p>                   
                    </div>)}
                   <Button onClick={()=>{restoreItem(i)}}>restore</Button>
                    </div>
                    </motion.div>
                    ))}
                    </AnimatePresence>

                    {/* array for domid1 */}
                    <AnimatePresence>
            {cancelledD1.length>0 && (cancelledD1.map((item, i)=>
            <motion.div
              key={`acc-${i}`}
              style={itemBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            <div key={i}>
               <p>Total Kg: {item.totalKg}</p>
            <p>No of Bottles: {item.noOfBots}</p>
            <p>Unit Price: {item. unitPrice}</p>
            <p>End User Price: {item.endUserPrice}</p>
            <p>Purchase Amount: {item.purchaseAmount}</p>
            <p>Cash Given: {item.cashGiven}</p>
            <p>Profit: {item.profit}</p>                
                          <Button onClick={()=>{restoreD1Item(i)}}>restore</Button>
                    </div></motion.div>))}
                    </AnimatePresence>

                    {/* array for domid2 */}
                    <AnimatePresence>
            {cancelledD2.length>0 && (cancelledD2.map((item, i)=>
            <motion.div
              key={`acc-${i}`}
              style={itemBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            <div key={i}>
              <p>Customer Name: {item.customerName}</p>                                      
                <p>Total Kg: {item.totalKg}</p>                                      
                <p>Cost Price: {item.costPrice}</p>                                      
                <p>End User Price: {item.endUserPrice}</p>                                      
                <p>profit: {item.profit}</p>              
                    
                   <Button onClick={()=>{restoreD2Item(i)}}>restore</Button>
                    </div></motion.div>))}
                  </AnimatePresence>

                    {/* array for cylinder */}
                    <AnimatePresence>
            {cancelledCyl.length>0 && (cancelledCyl.map((item, i)=>
            <motion.div
              key={`acc-${i}`}
              style={itemBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            <div key={i}>
              <p>Gas Filled: {item.gasFilled}</p>                                      
                <p>Gas Dispensed: {item.gasDis}</p>                                      
                <p>Gas Difference: {item.gasDiff}</p>                                      
                <p>Cost Price: {item.costPrice}</p>                                      
                <p>Sales Amount: {item.salesAmount}</p>                                      
                <p>profit: {item.profit}</p>               
                    
                   <Button onClick={()=>{restoreCyItem(i)}}>restore</Button>
                    </div></motion.div>))}
                    </AnimatePresence>
                
                    </Box>

    </div>
  )
}

export default CanceledR