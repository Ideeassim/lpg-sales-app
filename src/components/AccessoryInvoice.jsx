import {React, useState} from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper } from '@mui/material';
import InvoiceTable from './InvoiceTable';
import PracticeInv from './PracticeInv';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


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
            <em>Select</em>
          </MenuItem>
            {menus.map((menu, index) => (
              <MenuItem key={index} value={menu}>{menu}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <PracticeInv account={account}/>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '10px', textAlign: 'center' }}>
        
        </Paper>
        {/* <InvoiceTable/> */}
    </Paper>
  )
}

export default AccessoryInvoice