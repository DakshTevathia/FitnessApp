import React from 'react'
import { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination"
import { Box, Stack, Typography } from "@mui/material"
import { exerciseOptions, fetchData } from "../utils/fetchData"
import ExerciseCard from "../components/ExerciseCard";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExerciseOnPage = currentPage * exercisesPerPage;
  const indexOfFirstExerciseOnPage = indexOfLastExerciseOnPage - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExerciseOnPage, indexOfLastExerciseOnPage)
  const paginate = (e, value) => {
    setCurentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });


  }
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart])

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "110px" } }}
      mt="50px"
      p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", sx: "50px" } }} flexWrap="wrap" justifyContent="center">
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 0 && (
          <Pagination color="standard"
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercises