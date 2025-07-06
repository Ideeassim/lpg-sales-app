import React from 'react'
import { Button, Box, Typography } from '@mui/material'

const CanceledR = ({cancelledR, restoreItem, heading}) => {


  return (
    <div>
        <Box >
          <Typography variant='h6' sx={heading}>Canceled Receipts</Typography>
            {cancelledR.length>0 && (cancelledR.map((x, i)=>
            <div key={i}>{x.map((x2, index) =>
            <div key={index}><p>item: {x2.item}</p>
                    <p>price:{x2.price}</p>
                    <p>quantity:{x2.quantity}</p></div>)}
                   <Button onClick={()=>{restoreItem(i)}}>restore</Button>
                    </div>))}
                    
                
                    </Box>

    </div>
  )
}

export default CanceledR