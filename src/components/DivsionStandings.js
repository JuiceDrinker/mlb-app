import React from "react";
import standingsData from "../data/standingsData";
import Division from "./Division";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    width: "33%",
  },
});
function DivisionStandings() {
  const classes = useStyles();
  const divsionNames = []; //TODO: Refactor this to be more elegant at some point please :)
  for (const divisionAbbreviations in standingsData) {
    divsionNames.push(divisionAbbreviations);
  }

  return (
    <Grid container direction="row" justify="space-between">
      {divsionNames.map((divisionName, index) => (
        <Grid item className={classes.item}>
          <Division
            data={standingsData[divisionName]}
            divisionName={divisionName}
            key={index} //TODO: Add unique ID
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default DivisionStandings;
