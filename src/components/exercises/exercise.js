import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  Paper: { padding: 10, margin: "30px 10px", height: "60vh", overflowY: "auto" }
};

const Exercises = React.memo(
  ({
    exercises,
    category,
    chooseExercise,
    chosenExercise: {
      id = "",
      title = "welcome",
      description = "select something from the left bar"
    }
  }) => {
    return (
      <Grid container>
        <Grid item xs>
          <Paper style={styles.Paper}>
            {exercises.map(item => {
              return !category || item[0] === category ? (
                <React.Fragment>
                  <Typography style={{ textTransform: "capitalize" }}>
                    {item[0]}
                  </Typography>
                  <List component="ul">
                    {item[1].map(item => {
                      return (
                        <ListItem button onClick={e => chooseExercise(item.id)}>
                          <ListItemText>{item.title}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </React.Fragment>
              ) : null;
            })}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper style={styles.Paper}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
);

export default Exercises;
