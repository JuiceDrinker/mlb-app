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
      {divsionNames.map((divisionName, index) => (
        <Division
          data={standingsData[divisionName]}
          divisionName={divisionName}
          key={index} //TODO: Add unique ID
        />
      ))}
    </div>
  );
}

export default DivisionStandings;
