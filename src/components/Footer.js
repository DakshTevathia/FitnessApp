import React from 'react'
import { Box, Button, Stack, Typography } from "@mui/material"
import Logo from "../assets/images/Logo.png"

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: 'auto', height: 'auto' }} />
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '15px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by DT</Typography>
    </Box>
  )
}

export default Footer