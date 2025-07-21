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
import axios from 'axios'
import Receipts from '../components/Receipts';
import StoredReceipts from '../components/StoredReceipts';
import Expense from '../components/Expense';



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
     const [cancelledD1, setCancelledD1]=useState([]);
     const [cancelledD2, setCancelledD2]=useState([]);
     const [cancelledCyl, setCancelledCyl]=useState([]);
     const [storedDom1R, setStoredDom1R]=useState([]); //domid1 receipts
     const[storedDom2R, setStoredDom2R]=useState([]); //domid2 receipts
     const[storedCyl, setStoredCyl]=useState([]); // cylinder receipts
     const[accTotal, setAccTotal]=useState([]);
     const [expenseData, setExpense]=useState([]);

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
    
//  async  function allSave (){
   
//         const allReceipts=[
//       ...storedReceipts.map(r =>({...r, account:'accessories '})),
//       ...storedDom1R.map(r =>({...r, account:'domid 1'})),
//       ...storedDom2R.map(r =>({...r, account:'domid 2'})),
//       ...storedCyl.map(r =>({...r, account:'cylinder gas'})),
//     ];
//       // Save to backend
//        for (let receipt of allReceipts) {
//     try { 
//       const res = await axios.post("http://localhost:5000/api/receipts/add", receipt);
//     console.log("Saved to backend:", res.data);
//        }
//         catch (error) {
//         console.error("Error saving accessory:", error);
//     alert("Error saving accessory");
//        }
      
//   }
//    alert("All receipts saved!");
//    console.log(allReceipts);
   
//  }



   function handleAccSave() {             
       setDisplay('home')
       handleDataSave ()   
       const newR=[...storedReceipts, ...rows]   
       setStoredReceipts(newR);
      setAccTotal(prev => [...prev, grandTotal]);        
   
     console.log("Posting this data:", newR);
      axios.post("http://localhost:5000/api/receipts/add", newR)
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error posting data:', error);
  });
  setRows([]);
    } 
    
    
//     async function allSave({ accessories, domid1, domid2, cylinder }) {
//   const allReceipts = [
//     ...accessories.map(r => ({ ...r, account: 'accessories' })),
//     ...domid1.map(r => ({ ...r, account: 'domid 1' })),
//     ...domid2.map(r => ({ ...r, account: 'domid 2' })),
//     ...cylinder.map(r => ({ ...r, account: 'cylinder gas' })),
//   ];

//   for (let receipt of storedReceipts) {
//     try {
//       const res = await axios.post("http://localhost:5000/api/receipts/add",{});
//       console.log("Saved to backend:", res.data);
//     } catch (error) {
//       console.error("Error saving receipt:", error);
//       alert("Error saving receipt");
//     }
//   }

//   alert("All receipts saved!");
//   console.log(allReceipts);
// }



 
 
    


const handleLedgerClick = (event) => {
    const ledger = event.target.innerText.trim();
  if (ledger === 'Sales') {
  
         setAnchorEl(event.currentTarget);
          

 } else if(ledger === 'Ledger') {
    setLedger(true)
 
    setDisplay('Ledgers')
  }else if(ledger === 'Receipts'){
    setDisplay('Receipts')
  }else if(ledger === 'Expense'){
    setDisplay('Expense')
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
    setDisplay( 'Cylinder Gas');
    setInfo((prev) =>{ const updatedInfo={...prev, invoiceNo: (Math.floor(Math.random()*1000)), Account:'Cylinder Gas'};
      return {...updatedInfo}})
 
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
const Invoices=['Accessories','Domid Gas I', 'Domid Gas II', 'Cylinder Gas']

 function indexCheck(indexToRemove) {

  setRows(prevValue => {
      
    return prevValue.filter((_, i) =>i !== indexToRemove)});
 
}



function deleteItem(id) {
  const receiptToCancel = storedReceipts.find(r => r._id === id); //for accessories
   console.log("Deleting ID:", id); 
   axios.delete(`http://localhost:5000/api/receipts/${id}`)
    .then(response => {
      console.log(response.data.message);

      // Remove from UI after backend confirms deletion
      setStoredReceipts(prev => prev.filter(receipt => receipt._id !== id));
    })
    .catch(error => {
      console.error('Error deleting receipt:', error);
      res.status(500).json({ error: err.message });
    });
 

  // Add to cancelledR
  setCancelledR(prev =>
    [...prev, receiptToCancel]); 
   
}

//remove item in domid1 receipt
function deleteD1R(index) {
    const domReceiptCancel = storedDom1R[index]; //for domid1

    
  setStoredDom1R(prev => {
    return prev.filter((_,i) => i !==index) //remove item from storedDom1R
  });

   setCancelledD1(prev =>
    [...prev, domReceiptCancel]); //add to cancelledR

}

//remove item in domid2 receipt
function deleteD2R(index) {
  const dom2ReceiptCancel = storedDom2R[index]; //for domid2

  setStoredDom2R(prev => {
    return prev.filter((_,i) => i !==index) //remove item from storedDom2R
  })

     setCancelledD2(prev =>
    [...prev, dom2ReceiptCancel]); //add to cancelledR
}
//remove item in cylinder receipt
function deleteCyl(index) {
  const cylReceiptCancel = storedCyl[index]; //for cylinder

  setStoredCyl(prev => {
    return prev.filter((_,i) => i !==index) //remove item from cylinder
  })

     setCancelledCyl(prev =>
    [...prev, cylReceiptCancel]); //add to cancelledR
    console.log(cancelledCyl);
    
}

function restoreItem(index) {
  const itemToRestore= cancelledR[index];

  //Add to storedReceipts
  setStoredReceipts(prev => [...prev, itemToRestore]);

  //remove from CancelledR
  setCancelledR(prev =>{ 
    return prev.filter((_,i) => i !==index)})
}

//restore D1
function restoreD1Item(index) {
  const itemToRestore= cancelledD1[index];

  //Add to storedReceipts
  setStoredDom1R(prev => [...prev, itemToRestore]);

  //remove from CancelledR
  setCancelledD1(prev =>{ 
    return prev.filter((_,i) => i !==index)})
}

//restore D2
function restoreD2Item(index) {
  const itemToRestore= cancelledD2[index];

  //Add to storedReceipts
  setStoredDom2R(prev => [...prev, itemToRestore]);

  //remove from CancelledR
  setCancelledD2(prev =>{ 
    return prev.filter((_,i) => i !==index)})
}
//restore Cylinder canceled receipt
function restoreCyItem(index) {
  const itemToRestore= cancelledCyl[index];

  //Add to storedReceipts
  setStoredCyl(prev => [...prev, itemToRestore]);

  //remove from CancelledR
  setCancelledCyl(prev =>{ 
    return prev.filter((_,i) => i !==index)})
}

function removeLedgerItem(index) {
  setStoreData(prev => {
    return prev.filter((_,i) => i !==index )
  })
}

//set each account expense
const [allExp, setAllExp]=useState({
    accExp:'',
    dom1Exp:'',
    dom2Exp:'',
    cylExp:''
  })
const [allExpArr, setArr]=useState([]);

    
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
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
            sx: {
        backgroundColor: '#F6F1E9', // menu background
        color: '#FFFFFF',           // default text color for menu
      },
          },
        }}
      >
        {Invoices.map((item, index) => <MenuItem onClick={handleClose} key={index} sx={{
        color: '#454545', // text color
        '&:hover': {
          backgroundColor: '#333333', // hover background
          color: '#FFF',
        }}}>{item} invoice</MenuItem>)}
        
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
           {displayComp === 'Accessories' && <AccessoryInvoice  handleDataSave={handleDataSave} setInfo={setInfo} info={info}  heading={heading} rows={rows} setRows={setRows} grandTotal={grandTotal} setGrandTotal={setGrandTotal} handleAccSave={handleAccSave} date={formattedDate}  indexCheck={indexCheck} setStoredReceipts={setStoredReceipts} />}
           {displayComp === 'Domid Gas I' && <DomidInvoice   setStoredDom1R={setStoredDom1R} setDisplay={setDisplay} heading={heading} info={info} setInfo={setInfo} date={formattedDate} setStoreData={setStoreData}/>}
           {displayComp === 'Domid Gas II' && <Domid2Invoice   setInfo={setInfo} setStoreData={setStoreData} setDisplay={setDisplay} info={info} setStoredDom2R={setStoredDom2R}  heading={heading} date={formattedDate}/>}
           {displayComp === 'Cylinder Gas' && <CylinderInvoice    heading={heading} info={info} date={formattedDate} setInfo={setInfo} setStoreData={setStoreData} setStoredCyl={setStoredCyl} setDisplay={setDisplay}/>}
          {displayComp === 'Expense' && <Expense expenseData={expenseData} setExpense={setExpense} allExp={allExp} setArr={setArr}  setAllExp={setAllExp} allExpArr={allExpArr} heading={heading} storeData={storeData} date={formattedDate}/>}
           {displayComp === 'Ledgers' && <Ledger heading={heading} allExpArr={allExpArr} accTotal={accTotal} removeLedgerItem={removeLedgerItem} ledgerTotal={ledgerTotal} info={info} setInfo={setInfo} formattedDate={formattedDate} storeData={storeData} storedReceipts={storedReceipts}   storedDom1R={storedDom1R} storedDom2R={storedDom2R} storedCyl={storedCyl}/>}
            {displayComp ==='Receipts' && <StoredReceipts  setStoredReceipts={ setStoredReceipts}  storedDom1R={storedDom1R} storedDom2R={storedDom2R} storeData={storeData} restoreItem={restoreItem} restoreD1item={restoreD1Item} restoreD2item={restoreD2Item} cancelledR={cancelledR} cancelledD1={cancelledD1} cancelledD2={cancelledD2} deleteItem={deleteItem} deleteD1R={deleteD1R} deleteD2R={deleteD2R} heading={heading} grandTotal={grandTotal} handleAccSave={handleAccSave} storedReceipts={storedReceipts} storedCyl={storedCyl} cancelledCyl={cancelledCyl} restoreCyItem={restoreCyItem} deleteCyl={deleteCyl}  />}
        </Box>
    </div>
);
};

export default Homepage;