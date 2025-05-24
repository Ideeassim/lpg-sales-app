import React from 'react'
import { Paper, Stack,Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
const handleSubmit = () => {
  // Do some logic, then navigate
  navigate("/dashboard");
};
return (
    <div className='h-dvh w-dvw bg-gray-100 flex flex-col items-center justify-center'>
        <Typography variant='h2' align='center' sx={{ width: '100%', pt:'10rem' }}>
            Domid <span className='text-amber-500'>Ledger</span>
        </Typography>
        <Paper component='form' elevation={3} style={{ padding: '40px', width: '300px', margin: 'auto' }}>
            <Stack spacing={2}>
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Button onClick={handleSubmit} size="small" variant="contained" sx={{ width: '100px', alignSelf: 'center', backgroundColor: '#333' }}>LOGIN</Button>
            </Stack>
        </Paper>
    </div>
)
}

export default Login