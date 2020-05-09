import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import SearchBar from "./SearchBar";

function Appbar() {
  return (
    <div>
      <AppBar position="static">
        <Typography>MLB App</Typography>
        <SearchBar />
        <Typography>Franchise Search</Typography>
        <Typography>Season Search</Typography>
      </AppBar>
    </div>
  );
}

export default Appbar;
