import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "../App.css";

export default function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar variant="dense">
        <center>
          <Typography variant="h5" color="inherit">
            Search Lyrics
          </Typography>
        </center>
      </Toolbar>
    </AppBar>
  );
}
