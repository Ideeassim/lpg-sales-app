import {React, useState} from 'react'
import { Box, Paper } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccessoryInvoice from './AccessoryInvoice';


const InvoiceHeading = () => {
  const [account, setAccount] = useState('');

  const handleChange = (event) => {
    setAccount(event.target.value);
  };
 const data=['Invoice date', 'Name', 'Invoice number'];
const menus=['Cylinder gas', 'Tank gas', 'Domid gas I', 'Domid gas II', 'Accessories'];

 const dataStyle = {
  fontSize: '1rem',
color:'#333',
  fontWeight: 'bold',}
  return (
    
        <div className='p-5 '>
      <Box className='flex justify-evenly items-center'>  <Box>
        <FormControl sx={{ m: 1, minWidth:50 }} size="small">
          
          <Select
          displayEmpty
            value={account}            
            onChange={handleChange}
          >
              <MenuItem value="">
            <em>Account</em>
          </MenuItem>
            {menus.map((menu, index) => (
              <MenuItem key={index} value={menu}>{menu}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
       {data.map((item, index) => {
  return <h2 key={index} style={dataStyle}>{item}:</h2>
} )}
      
      </Box>  
        
        <AccessoryInvoice />
        <Paper>
          hello
          </Paper>
        </div>
    
  )
}

export default InvoiceHeading