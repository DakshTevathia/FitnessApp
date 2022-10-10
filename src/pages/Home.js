import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/system'
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
    const [exercise, setExercise] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");

    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercise={setExercise}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
            <Exercises
                setExercises={setExercise}
                bodyPart={bodyPart}
                exercises={exercise} />
        </Box>
    )
}

export default Home