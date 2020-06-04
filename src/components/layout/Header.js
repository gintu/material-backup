import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="inherit" variant="h4">
          Exercises Database
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
