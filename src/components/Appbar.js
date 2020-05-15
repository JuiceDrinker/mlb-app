import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
function Appbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="default" className={classes.appbar}>
        <Typography>MLB App</Typography>
        <SearchBar />
        <Typography>Franchise Search</Typography>
        <Typography>Season Search</Typography>
      </AppBar>
    </div>
  );
}

export default Appbar;
