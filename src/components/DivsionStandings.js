import React from "react";
import standingsData from "../data/standingsData";
import Division from "./Division";
function DivisionStandings() {
  const divsionNames = []; //TODO: Refactor this to be more elegant at some point please :) 
  for (const divisionAbbreviations in standingsData) {
    divsionNames.push(divisionAbbreviations);
  }
  return (
    <div>
      {divsionNames.map((divNames) => (
        <Division data={standingsData[divNames]} divNames={divNames} />
      ))}
    </div>
  );
}

export default DivisionStandings;
