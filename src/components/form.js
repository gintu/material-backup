import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { muscles } from "../store";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  textField: {
    width: 300
  }
});

const Form = ({ handleClose, handleManipulation, toBeEdited }) => {
  const classes = useStyles();

  const startState = !!toBeEdited
    ? { ...toBeEdited }
    : {
        title: "",
        description: "",
        muscles: ""
      };

  const [exercise, setExercise] = useState(startState);

  const handleChange = event => {
    let temp = { ...exercise, [event.target.name]: event.target.value };
    setExercise(temp);
  };

  const handleClick = () => {
    let temp = {
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, "-")
    };
    handleManipulation(temp);
    setExercise({
      title: "",
      description: "",
      muscles: ""
    });
  };

  return (
    <form>
      <TextField
        name="title"
        label="Title"
        value={exercise.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
        className={classes.textField}
      />
      <br />
      <TextField
        name="description"
        label="Description"
        value={exercise.description}
        onChange={handleChange}
        multiline
        rowsMax={4}
        fullWidth
        margin="normal"
        className={classes.textField}
      />
      <br />
      <TextField
        name="muscles"
        select
        label="Select Muscle"
        value={exercise.muscles}
        onChange={handleChange}
        fullWidth
        margin="normal"
        className={classes.textField}>
        {muscles.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClick} color="primary">
          Create
        </Button>
      </DialogActions>
    </form>
  );
};

export default Form;
