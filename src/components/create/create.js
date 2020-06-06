import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Form from "../form";

export default function Create({ muscles, handleCreate }) {
  const [open, setOpen] = React.useState(false);

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

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Exercise</DialogTitle>
        <DialogContent>
          <Form handleClick={handleClick} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
