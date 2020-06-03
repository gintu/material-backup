import React, { useState } from "react";
import "./styles.css";
import { Header, Footer } from "./components/layout";
import Excercises from "./components/exercises/exercise";
import { muscles, exercises } from "./store";

export default function App() {
  const [exerciseList, setExerciseList] = useState(exercises);
  let getExcercisesByMuscles = () => {
    // let sorted = {};
    // for (let item of exercises) {
    //   if (Object.keys(sorted).includes(item.muscles)) {
    //     sorted[item.muscles].push(item);
    //   } else {
    //     sorted[item.muscles] = [];
    //     sorted[item.muscles].push(item);
    //   }
    // }

    let sorted = exerciseList.reduce((all, excercise) => {
      let { muscles } = excercise;

      all[muscles] = all[muscles] ? [...all[muscles], excercise] : [excercise];

      return all;
    }, {});

    return Object.entries(sorted);
  };
  console.log(getExcercisesByMuscles());
  return (
    <React.Fragment>
      <Header />
      <Excercises />

      <Footer muscles={muscles} />
    </React.Fragment>
  );
}
