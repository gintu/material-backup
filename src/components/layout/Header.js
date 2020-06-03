import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="inherit" variant="h3">
          Excercises
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
