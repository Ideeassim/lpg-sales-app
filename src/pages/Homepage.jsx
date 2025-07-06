import React, { useEffect, useState } from 'react'
import AccessoryInvoice from '../components/AccessoryInvoice';
import CylinderInvoice from '../components/CylinderInvoice';
import DomidInvoice from '../components/DomidInvoice';
import Domid2Invoice from '../components/Domid2Invoice';
import Ledger from '../components/Ledger';
import { Box, Button, Typography } from '@mui/material';
import TankGas from '../components/TankGas';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Receipts from '../components/Receipts';
import StoredReceipts from '../components/StoredReceipts';



const Homepage = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const [Ledgers, setLedger]=useState(false);

const[displayComp, setDisplay]= useState('home')

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  };

// accessory state
    const [rows, setRows] = useState([]);
     const [grandTotal, setGrandTotal]= useState(0);
     const [storedReceipts, setStoredReceipts]=useState([]); //accessories receipts
     const [cancelledR, setCancelledR]= useState([]);
     const [storedDom1R, setStoredDom1R]=useState([]); //domid1 receipts
     const[storedDom2R, setStoredDom2R]=useState([]); //domid2 receipts
     
     
 const today = new Date();
const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

   
  
    //TRANSFER TO LEDGER:
      const [info, setInfo]=useState({
        invoiceNo:'',
        invoiceDate: formattedDate,
        Account: '',
        Amount: ''
       
    })

    useEffect(()=>setInfo(prev =>({...prev, Amount: grandTotal})), [grandTotal])
    
    const [storeData, setStoreData]=useState([])
       
    //calculate ledger total        
     const [ledgerTotal, setLedgerTotal]= useState(0);
   


    function handleDataSave() {
      if (info.invoiceNo && rows.length>0) {
      
        
        setStoreData((prev) =>[...prev, info])
      }else {alert('Please enter receipt'), setDisplay('Accessories')}
      if (info.Amount) {
        setLedgerTotal(ledgerTotal+info.Amount);
      }
      
    }
    
   function handleAccSave() {
               
       setDisplay('home')
       handleDataSave ()
      
       setStoredReceipts(prev => [...prev, rows]);
      
     ;
       
      setRows([]);
    } 

  
    


const handleLedgerClick = (event) => {
    const ledger = event.target.innerText.trim();
  if (ledger === 'Sales') {
  
         setAnchorEl(event.currentTarget);
          

 } else if(ledger === 'Ledger') {
    setLedger(true)
 
    setDisplay('Ledgers')
  }else if(ledger === 'Receipts'){
    setDisplay('Receipts')
  }
}

const handleClose = (event) => {
    setAnchorEl(null);
    const item = event.target.innerText.trim();
   if (item === 'Accessories invoice') {
    setDisplay('Accessories')
    setInfo((prev) =>{ const updatedInfo={...prev, invoiceNo: (Math.floor(Math.random()*1000)), Account:'Accessories'};
      return {...updatedInfo}})
   }else if (item ==='Domid Gas I invoice') {
     setDisplay('Domid Gas I');
      setInfo((prev) =>{ const updatedInfo={...prev, invoiceNo: (Math.floor(Math.random()*1000)), Account:'Domid I'};
      return {...updatedInfo}})
   }else if (item === 'Domid Gas II invoice') {
    setDisplay('Domid Gas II');
    setInfo((prev) =>{ const updatedInfo={...prev, invoiceNo: (Math.floor(Math.random()*1000)), Account:'Domid II'};
      return {...updatedInfo}})
   }else if (item === 'Cylinder Gas invoice'){
    setDisplay( 'Cylinder Gas')
   }else if (item === 'Tank Gas invoice') {
    setDisplay('Tank Gas')
   }
   else if (Ledgers) { setDisplay('Ledgers')
    
   }
   else{setDisplay('home')}
  };

const ledgers = ['Sales ', 'Expense','Receipts', 'Ledger'];
const ledgerStyle = {
  fontSize: '1.5rem',
  color: 'orange',
  textTransform: 'none',
  
};
const heading ={
        textAlign: 'center',
        color: '#2A4759'
    };
const Invoices=['Accessories','Domid Gas I', 'Domid Gas II', 'Cylinder Gas', 'Tank Gas']

 function indexCheck(indexToRemove) {

  setRows(prevValue => {
      
    return prevValue.filter((_, i) =>i !== indexToRemove)});
 
}



function deleteItem(itemToRemove) {
  const receiptToCancel = storedReceipts[itemToRemove];

  // Remove it from storedReceipts
  setStoredReceipts(prev =>
    prev.filter((_, i) => i !== itemToRemove)
  );

  // Add to cancelledR
  setCancelledR(prev =>
    [...prev, receiptToCancel]);
}

function restoreItem(index) {
  const itemToRestore= cancelledR[index];

  //Add to storedReceipts
  setStoredReceipts(prev => [...prev, itemToRestore]);

  //remove from CancelledR
  setCancelledR(prev =>{ 
    return prev.filter((_,i) => i !==index)})
}

function removeLedgerItem(index) {
  setStoreData(prev => {
    return prev.filter((_,i) => i !==index )
  })
}

//remove item in domid1 receipt
function removeItem(index) {
  setStoredDom1R(prev => {
    return prev.filter((_,i) => i !==index)
  })
}
//remove item in domid2 receipt
function removeItem(index) {
  setStoredDom2R(prev => {
    return prev.filter((_,i) => i !==index)
  })
}
    
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
            {/* big display */}
        <Box sx={{display:'flex', direction:'column', justifyContent:'center', alignItems:'center', padding:'40px'}}>
           {displayComp === 'home' && <Typography variant='h5'>it all starts here</Typography>}
           {displayComp === 'Accessories' && <AccessoryInvoice handleDataSave={handleDataSave} setInfo={setInfo} info={info}  heading={heading} rows={rows} setRows={setRows} grandTotal={grandTotal} setGrandTotal={setGrandTotal} handleAccSave={handleAccSave} date={formattedDate}  indexCheck={indexCheck} setStoredReceipts={setStoredReceipts}/>}
           {displayComp === 'Domid Gas I' && <DomidInvoice setStoredDom1R={setStoredDom1R} setDisplay={setDisplay} heading={heading} info={info} setInfo={setInfo} date={formattedDate} setStoreData={setStoreData}/>}
           {displayComp === 'Domid Gas II' && <Domid2Invoice setInfo={setInfo} setStoreData={setStoreData} setDisplay={setDisplay} info={info} setStoredDom2R={setStoredDom2R}  heading={heading} date={formattedDate}/>}
           {displayComp === 'Cylinder Gas' && <CylinderInvoice  heading={heading}/>}
           {displayComp === 'Tank Gas' && <TankGas  heading={heading}/>}
           {displayComp === 'Ledgers' && <Ledger removeLedgerItem={removeLedgerItem} ledgerTotal={ledgerTotal} info={info} setInfo={setInfo} formattedDate={formattedDate} storeData={storeData} />}
            {displayComp ==='Receipts' && <StoredReceipts removeItem={removeItem} storedDom1R={storedDom1R} storedDom2R={storedDom2R} storeData={storeData} restoreItem={restoreItem} cancelledR={cancelledR} deleteItem={deleteItem} heading={heading} grandTotal={grandTotal} handleAccSave={handleAccSave} storedReceipts={storedReceipts}/>}
        </Box>
    </div>
);
};

export default Homepage;