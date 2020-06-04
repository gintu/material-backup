import React, { useState } from "react";
import "./styles.css";
import { Header, Footer } from "./components/layout";
import Excercises from "./components/exercises/exercise";
import { muscles, exercises } from "./store";

export default function App() {
  const [exerciseList, setExerciseList] = useState(exercises);
  console.log("get exercises is running");

  let getExcercisesByMuscles = () => {
    let sorted = exerciseList.reduce((all, excercise) => {
      let { muscles } = excercise;

      all[muscles] = all[muscles] ? [...all[muscles], excercise] : [excercise];

      return all;
    }, {});

    return Object.entries(sorted);
  };

  const exercisesByMuscles = getExcercisesByMuscles();

  return (
    <React.Fragment>
      <Header />
      <Excercises exercises={exercisesByMuscles} />

      <Footer muscles={muscles} />
    </React.Fragment>
  );
}
