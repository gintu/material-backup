import React from "react";
import "./styles.css";
import { Header, Footer } from "./components/layout";
import Excercises from "./components/excercises/excersices";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Excercises />

      <Footer />
    </React.Fragment>
  );
}
