import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "./../context/SearchContext";
import API from "../lib/api-services";
import standingsData from "../data/standingsData";
import DivisionStandings from "./DivsionStandings";

function IndexPage() {
  return (
    <div>
      <DivisionStandings />
    </div>
  );
}

export default IndexPage;
