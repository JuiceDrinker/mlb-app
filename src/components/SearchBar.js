import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { useContext, useEffect } from "react";
import SearchContextState from "../context/SearchContextState";
import SearchContextDispatch from "../context/SearchContextDispatch";
import { useState } from "react";

function SearchBar(props) {
  const { dispatch } = useContext(SearchContextDispatch);

  const submitSearch = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "handleSearch", payload: search });
    }
  };
  const [search, setSearch] = useState("");
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Enter a player name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => submitSearch(e)}
      />
    </div>
  );
}

export default SearchBar;
