import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Create from "../create/create";

const Header = React.memo(({ muscles, handleCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="inherit" variant="h4" style={{ flexGrow: 1 }}>
          Exercises Database
        </Typography>
        <Create muscles={muscles} handleCreate={handleCreate} />
      </Toolbar>
    </AppBar>
  );
});

export default Header;
