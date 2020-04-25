import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
function SearchBar() {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
