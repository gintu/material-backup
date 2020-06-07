import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import From from "../form";

const styles = {
  Paper: { padding: 10, margin: "30px 10px", height: "60vh", overflowY: "auto" }
};

const Exercises = React.memo(
  ({
    exercises,
    category,
    chooseExercise,
    chosenExercise,
    chosenExercise: {
      id = "",
      title = "welcome",
      description = "select something from the left bar"
    },
    editMode,
    handleEditClick,
    handleEdit,
    handleDelete
  }) => {
    return (
      <Grid container>
        <Grid item xs>
          <Paper style={styles.Paper}>
            {exercises.map(item => {
              return !category || item[0] === category ? (
                <React.Fragment key={item}>
                  <Typography style={{ textTransform: "capitalize" }}>
                    {item[0]}
                  </Typography>
                  <List component="ul">
                    {item[1].map(item => {
                      return (
                        <ListItem
                          button
                          key={item.id}
                          onClick={e => chooseExercise(item.id)}>
                          <ListItemText>{item.title}</ListItemText>
                          <ListItemSecondaryAction>
                            <IconButton
                              edge="end"
                              onClick={() => handleEditClick(item.id)}>
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              onClick={() => handleDelete(item.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
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
            {editMode ? (
              <From
                handleManipulation={handleEdit}
                toBeEdited={chosenExercise}
              />
            ) : (
              <React.Fragment>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
              </React.Fragment>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
);

export default Exercises;
