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
import { muscles } from "../../store";

export default function Create() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [exercise, setExercise] = useState({
    title: "",
    description: "",
    muscles: ""
  });

  const handleChange = event => {
    console.log(event.target);
    let temp = { ...exercise, [event.target.name]: event.target.value };
    setExercise(temp);
    console.log(temp);
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
              variant="filled"
            />
            <br />
            <TextField
              name="description"
              label="Description"
              value={exercise.description}
              onChange={handleChange}
              variant="filled"
              multiline
              rowsMax={4}
            />
            <TextField
              name="muscles"
              select
              label="Select Muscle"
              value={exercise.muscles}
              onChange={handleChange}
              helperText="Please select the musclegroup"
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
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
