import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Form from "../form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: { Width: "250px" }
}));

export default function Create({ muscles, handleCreate }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  console.log(classes);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newHandleCreate = item => {
    setOpen(false);
    handleCreate(item);
  };

  return (
    <div>
      <Fab color="default" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Exercise</DialogTitle>
        <DialogContent>
          <Form
            handleManipulation={newHandleCreate}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
