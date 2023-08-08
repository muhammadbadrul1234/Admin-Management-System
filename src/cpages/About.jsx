import React from 'react';
import Sidenav from '../ccomponents/Sidenav';
import CNavbar from '../ccomponents/CNavbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function About() {
    return (
        <>
                <CNavbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
            <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>About</h1>    
            </Box>
            </Box>
        </>
    );
}