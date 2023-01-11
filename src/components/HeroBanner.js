import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }} position="relative" p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "40px" } }} mb="23px" mt="30px">
                Sweat, Smile,<br /> Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb="4px">
                Check Out the Most Effective Exercises
            </Typography>
            <Button variant="contained" color="error" mb="3px" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: "10px" }}>Explore Exercises</Button>
            <Typography fontWeight={700} color="#FF2625" sx={{ opacity: '0.5', display: { lg: 'block', md: 'block', sm: 'none' }, fontSize: { lg: '200px', md: '120px' }, zIndex: 'fab' }}>
                Train Daily
            </Typography>
            <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        </Box >
    )
}

export default HeroBanner