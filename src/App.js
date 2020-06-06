import React, { useState, useMemo, useCallback } from "react";
import "./styles.css";
import { Header, Footer } from "./components/layout";
import Excercises from "./components/exercises/exercise";
import { muscles, exercises } from "./store";

export default function App() {
  const [exerciseList, setExerciseList] = useState(exercises);
  const [category, setCategory] = useState("");
  const [chosenExercise, setChosenExercise] = useState({});

  let initialExercise = muscles.reduce((all, category) => {
    return { ...all, [category]: [] };
  }, {});

  let getExcercisesByMuscles = useCallback(() => {
    let sorted = exerciseList.reduce((all, excercise) => {
      let { muscles } = excercise;

      all[muscles] = [...all[muscles], excercise];

      return all;
    }, initialExercise);

    return Object.entries(sorted);
  }, [exerciseList, initialExercise]);

  const exercisesByMuscles = useMemo(() => getExcercisesByMuscles(), [
    getExcercisesByMuscles
  ]);
  // const exercisesByMuscles = getExcercisesByMuscles();

  const selectCategory = args => {
    setCategory(args);
  };

  const chooseExercise = id => {
    let exercise = exerciseList.find(item => item.id === id);
    setChosenExercise(exercise);
  };

  const handleCreate = exercise => {
    let temp = [...exerciseList, exercise];
    setExerciseList(temp);
  };

  const handleDelete = id => {
    let temp = exerciseList.filter(item => item.id !== id);
    setExerciseList(temp);
  };

  return (
    <React.Fragment>
      <Header muscles={muscles} handleCreate={handleCreate} />
      <Excercises
        exercises={exercisesByMuscles}
        category={category}
        chooseExercise={chooseExercise}
        chosenExercise={chosenExercise}
        handleDelete={handleDelete}
      />
      <Footer
        muscles={muscles}
        category={category}
        selectCategory={selectCategory}
      />
    </React.Fragment>
  );
}
