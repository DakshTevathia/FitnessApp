import React from 'react';
import { Stack } from '@mui/material';
import Logo from "../assets/images/Logo.png";


const Navbar = () => {
    return (
        <div style={{ top: 0, backgroundColor: "#ff010017", zIndex: 2, position: 'sticky' }}>
            <Stack direction="row" justify content="space-around" alignItems='center' sx={{ gap: { sm: "122px", xs: '40px', mt: { sm: "32px", xs: "20px" } }, justifyContent: 'none' }} px="20px">
                <a href="/">
                    <img src={Logo} alt="Logo" style={{ width: "48px", height: "48px", margin: '0 20px' }} />
                </a>
                <Stack direction="row" gap="40px" alignItems="flex-end">
                    <a href="/" style={{ textDecoration: "none", color: "#381212", borderBottom: "3px solid #FF2625" }}>Home
                    </a>
                    {/* <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a> */}
                </Stack>
            </Stack>
        </div >

    )
}

export default Navbar