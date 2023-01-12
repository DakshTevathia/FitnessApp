import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material"
import { exerciseOptions, fetchData, youtubeOptions, ytoptions } from "../utils/fetchData"
import Detail from "../components/Detail";
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetails = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscle, setTargetMuscleData] = useState([]);
  const [equipmentUsed, setEquipmentUsedData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData);

      const youTubeData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, ytoptions)
      setExerciseVideos(youTubeData.contents);

      const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleData(targetMuscleData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentUsedData(equipmentExercisesData);

    }

    fetchExercisesData();
  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscle={targetMuscle} equipmentUsed={equipmentUsed} />
    </Box>
  )
}

export default ExerciseDetails