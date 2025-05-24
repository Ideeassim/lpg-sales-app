import {React, useState} from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper } from '@mui/material';


const AccessoryInvoice = () => {
  const [account, setAccount] = useState('');

  const handleChange = (event) => {
    setAccount(event.target.value);
  };
const menus=['standard regulator','standard valve','cast seater','hose'];

  return (
    <Paper elevation={3} style={{ padding: '20px', width: '60rem', margin: 'auto' }}>
       
        <FormControl sx={{ m: 1, minWidth:50 }} size="small">
          
          <Select
          displayEmpty
            value={account}            
            onChange={handleChange}
          >
              <MenuItem value="">
            <em>Accessory</em>
          </MenuItem>
            {menus.map((menu, index) => (
              <MenuItem key={index} value={menu}>{menu}</MenuItem>
            ))}
          </Select>
        </FormControl>
    </Paper>
  )
}

export default AccessoryInvoice