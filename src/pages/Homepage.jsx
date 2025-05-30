import React, { useState } from 'react'
import AccessoryInvoice from '../components/AccessoryInvoice';
import CylinderInvoice from '../components/CylinderInvoice';
import DomidInvoice from '../components/DomidInvoice';
import Domid2Invoice from '../components/Domid2Invoice';
import { Box, Button, Typography } from '@mui/material';
import TankGas from '../components/TankGas';
import Home from '../components/Home';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const Homepage = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [salesLedger, setSalesLedger] = useState(false);
  const [expenseLedger, setExpenseLedger] = useState(false);
const [accessory, setAccessory] = useState('');
const[displayComp, setDisplay]= useState('home')

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  };

const handleLedgerClick = (event) => {
    const ledger = event.target.innerText.trim();
  if (ledger === 'Sales') {
    setSalesLedger(true);
        setExpenseLedger(false);
         setAnchorEl(event.currentTarget);


  } else if (ledger === 'Expense') {
    setExpenseLedger(true);
    setSalesLedger(false);
  } else {
    setSalesLedger(false);
    setExpenseLedger(false);
  }
}

const handleClose = (event) => {
    setAnchorEl(null);
    const item = event.target.innerText.trim();
   if (item === 'Accessories invoice') {
    setDisplay('Accessories')
   }else if (item ==='Domid Gas I invoice') {
     setDisplay('Domid Gas I')
   }else if (item === 'Domid Gas II invoice') {
    setDisplay('Domid Gas II')
   }else if (item === 'Cylinder Gas invoice'){
    setDisplay( 'Cylinder Gas')
   }else if (item === 'Tank Gas invoice') {
    setDisplay('Tank Gas')
   }else{setDisplay('home')}
  };

const ledgers = ['Sales ', 'Expense', 'Domid Ledger'];
const ledgerStyle = {
  fontSize: '1.5rem',
  color: 'orange',
  textTransform: 'none',
  
};
const heading ={
        textAlign: 'center',
        color: '#F97A00'
    };
const Invoices=['Accessories','Domid Gas I', 'Domid Gas II', 'Cylinder Gas', 'Tank Gas']
return (
    <div className="min-h-full h-screen w-dvw bg-gray-100 pb-5 ">
        <nav className="h-16 bg-gray-800 flex items-center p-3">
            <div className="flex gap-10 items-center text-amber-500 w-full">
                {ledgers.map((ledger, index) => (
                    <Button
                        key={index}
                        
                        sx={ledgerStyle}
                        
                       aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleLedgerClick}
                    >
                        {ledger}
                    </Button>

                ))}
                 <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
      >
        {Invoices.map((item, index) => <MenuItem onClick={handleClose} key={index}>{item} invoice</MenuItem>)}
        
              </Menu>
               
            </div> 
            <Button
                    onClick={handleSubmit}
                    sx={{
                        color: 'gray',
                        fontSize: '1.1rem',
                        backgroundColor: 'white',
                        textTransform: 'none',
                        width: '100px',
                    }}
                >
                    Log out
                </Button>
        </nav>

        <Box sx={{display:'flex', direction:'column', justifyContent:'center', alignItems:'center', padding:'40px'}}>
           {displayComp === 'home' && <Typography variant='h5'>it all starts here</Typography>}
           {displayComp === 'Accessories' && <AccessoryInvoice heading={heading}/>}
           {displayComp === 'Domid Gas I' && <DomidInvoice  heading={heading}/>}
           {displayComp === 'Domid Gas II' && <Domid2Invoice  heading={heading}/>}
           {displayComp === 'Cylinder Gas' && <CylinderInvoice  heading={heading}/>}
           {displayComp === 'Tank Gas' && <TankGas  heading={heading}/>}
        </Box>
    </div>
);
};

export default Homepage;