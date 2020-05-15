import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContextState";
import API from "../lib/api-services";
import standingsData from "../data/standingsData";
import DivisionStandings from "./DivsionStandings";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "5 0%",
    border: "red solid 1px",
  },
});
function IndexPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <DivisionStandings className="container" />
    </div>
  );
}

export default IndexPage;
