import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Button, Typography, TextField } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalBodyPartsScrollBar from "../components/HorizontalBodyPartsScrollBar"

const SearchExercises = (props) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(["all", ...bodyPartsData]);
    }

    useEffect(() => {
        fetchExercisesData();
    }, [])

    const handleSeach = async () => {
        if (search) {
            //fetch exerciseData
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search));

            setSearch("");
            props.setExercise(searchedExercises);
            window.scrollTo({ top: 1700, left: 100, behavior: 'smooth' })
        }
    }


    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight="700px" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="30px" textAlign="center">
                Awesome Exercies You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '0px' },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff', borderRadius: '0px'
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn" sx={{
                    bgcolor: '#FF2625', color: '#fff', textTransform: 'none',
                    width: { lg: '173px', xs: '80px' },
                    height: '56px',
                    position: 'absolute',
                    right: '0px',
                    borderRadius: "0px",
                    fontSize: { lg: '20px', xs: '14px' }
                }}
                    onClick={handleSeach}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalBodyPartsScrollBar data={bodyParts} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart} isBodayPart={true} />
            </Box>

        </Stack >

    )
}

export default SearchExercises