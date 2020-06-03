import React from "react";
import Grid from "@material-ui/core/Grid";
import LeftPane from "./leftPane";
import RightPane from "./rightPane";

const style = {
  Paper: { padding: 10, margin: "30px 10px" }
};

const Exercises = props => {
  return (
    <Grid container>
      <Grid item xs>
        <LeftPane styles={style} />
      </Grid>
      <Grid item xs>
        <RightPane styles={style} />
      </Grid>
    </Grid>
  );
};

export default Exercises;
