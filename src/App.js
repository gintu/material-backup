import React, { useState, useMemo, useCallback } from "react";
import "./styles.css";
import { Header, Footer } from "./components/layout";
import Excercises from "./components/exercises/exercise";
import { muscles, exercises } from "./store";

export default function App() {
  const [exerciseList, setExerciseList] = useState(exercises);
  const [category, setCategory] = useState("");
  console.log(category);

  let getExcercisesByMuscles = useCallback(() => {
    let sorted = exerciseList.reduce((all, excercise) => {
      let { muscles } = excercise;

      all[muscles] = all[muscles] ? [...all[muscles], excercise] : [excercise];

      return all;
    }, {});

    return Object.entries(sorted);
  }, [exerciseList]);

  const exercisesByMuscles = useMemo(() => getExcercisesByMuscles(), [
    getExcercisesByMuscles
  ]);
  // const exercisesByMuscles = getExcercisesByMuscles();

  const selectCategory = args => {
    setCategory(args);
  };

  return (
    <React.Fragment>
      <Header />
      <Excercises exercises={exercisesByMuscles} />
      <Footer
        muscles={muscles}
        category={category}
        selectCategory={selectCategory}
      />
    </React.Fragment>
  );
}
