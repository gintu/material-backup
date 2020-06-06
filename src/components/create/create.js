import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    width: 300
  }
});

export default function Create({ muscles, handleCreate }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExercise({
      title: "",
      description: "",
      muscles: ""
    });
  };
  const handleClick = () => {
    let temp = {
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, "-")
    };
    handleCreate(temp);
    setOpen(false);
    setExercise({
      title: "",
      description: "",
      muscles: ""
    });
  };

  const [exercise, setExercise] = useState({
    title: "",
    description: "",
    muscles: ""
  });

  const handleChange = event => {
    let temp = { ...exercise, [event.target.name]: event.target.value };
    setExercise(temp);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Exercise</DialogTitle>
        <DialogContent>
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
              className={classes.textField}
            >
              {muscles.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
