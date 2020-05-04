import React from "react";
import { TextField } from "@material-ui/core";
function SearchBar({ setSearchQuery }) {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Enter a player name"
        variant="outlined"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
