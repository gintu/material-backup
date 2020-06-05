import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Create from "../create/create";

const Header = React.memo(props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="inherit" variant="h4" style={{ flexGrow: 1 }}>
          Exercises Database
        </Typography>
        <Create />
      </Toolbar>
    </AppBar>
  );
});

export default Header;
