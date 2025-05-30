import React, { useState } from 'react'
import AccessoryInvoice from '../components/AccessoryInvoice';
import CylinderInvoice from '../components/CylinderInvoice';
import { Box, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';



const Homepage = () => {
  const [salesLedger, setSalesLedger] = useState(false);
  const [expenseLedger, setExpenseLedger] = useState(false);
const [accessory, setAccessory] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  };

const handleLedgerClick = (event) => {
    const ledger = event.target.innerText.trim();
  if (ledger === 'Sales') {
    setSalesLedger(true);
    setExpenseLedger(false);
  } else if (ledger === 'Expense') {
    setExpenseLedger(true);
    setSalesLedger(false);
  } else {
    setSalesLedger(false);
    setExpenseLedger(false);
  }
}

const ledgers = ['Sales ', 'Expense', 'Domid Ledger'];
const ledgerStyle = {
  fontSize: '1.5rem',
  color: 'orange',
  textTransform: 'none',
  
};

return (
    <div className="min-h-full h-screen w-dvw bg-gray-100 pb-5">
        <nav className="h-16 bg-gray-800 flex items-center p-3">
            <div className="flex gap-10 items-center text-amber-500 w-full">
                {ledgers.map((ledger, index) => (
                    <Button
                        key={index}
                        
                        sx={ledgerStyle}
                        onClick={handleLedgerClick}
                       
                    >
                        {ledger}
                    </Button>
                ))}
                
               
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

        <Box>
           {salesLedger && <CylinderInvoice />} 
        </Box>
    </div>
);
};

export default Homepage;