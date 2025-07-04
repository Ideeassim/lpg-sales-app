import React from 'react'
import { Button, Paper } from '@mui/material'

const CanceledR = ({cancelledR, restoreItem}) => {


  return (
    <div>
        <Paper>
            {cancelledR.length>0? (cancelledR.map((x, i)=>
            <div key={i}>{x.map((x2, index) =>
            <div key={index}><p>item: {x2.item}</p>
                    <p>price:{x2.price}</p>
                    <p>quantity:{x2.quantity}</p></div>)}
                   <Button onClick={()=>{restoreItem(i)}}>restore</Button>
                    </div>)): <p>no data</p>}
                    
                
                    </Paper>

    </div>
  )
}

export default CanceledR