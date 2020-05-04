import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import API from "./lib/api-services";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); //State set by SearchBar Component, State consumed by SearchIcon onClick handler

  const [activePlayersOnly, setActivePlayersOnly] = useState(false);

  const handleSearch = () => {
    API.playerSearch(searchQuery, activePlayersOnly ? "Y" : "N")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="App">
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography> Search by Player Name </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SearchBar setSearchQuery={setSearchQuery} />
          <SearchIcon onClick={() => handleSearch(searchQuery)} />
          <Switch onChange={() => setActivePlayersOnly(!activePlayersOnly)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography> Search by Player Name </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SearchBar setSearchQuery={setSearchQuery} />
          <SearchIcon onClick={() => handleSearch(searchQuery)} />
          <Switch onChange={() => setActivePlayersOnly(!activePlayersOnly)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default App;
