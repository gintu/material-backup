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

const Exercises = React.memo(({ exercises }) => {
  return (
    <Grid container>
      <Grid item xs>
        <Paper style={styles.Paper}>
          {exercises.map((item, index) => {
            return (
              <React.Fragment>
                <Typography style={{ textTransform: "capitalize" }}>
                  {item[0]}
                </Typography>
                <List component="ul">
                  {item[1].map(item => {
                    return (
                      <ListItem button>
                        <ListItemText>{item.title}</ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </React.Fragment>
            );
          })}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>
          <Typography variant="h4">Welcome!</Typography>
          <Typography variant="body1">
            select any exercise from left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default Exercises;
