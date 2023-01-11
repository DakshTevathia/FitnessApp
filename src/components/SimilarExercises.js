import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
import Spinner from "../components/Spinner"
import HorizontalBodyPartsScrollBar from "../components/HorizontalBodyPartsScrollBar";

const SimilarExercises = ({ targetMuscle, equipmentUsed }) => {
    console.log(targetMuscle, "... ", equipmentUsed);
    return (
        <Box sx={{ mt: { lg: '3rem', xs: '0px' } }}>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }} >
                {targetMuscle.length !== 0 ? <HorizontalBodyPartsScrollBar data={targetMuscle} /> : <Spinner />}
            </Stack>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {equipmentUsed.length !== 0 ? <HorizontalBodyPartsScrollBar data={equipmentUsed} /> : <Spinner />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises