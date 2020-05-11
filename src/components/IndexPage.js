import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "./../context/SearchContext";
import API from "../lib/api-services";

function IndexPage() {
  const currentSeason = "2019"; //Baseball 2020 lets hope..
  const [currentSeasonData, setCurrentSeasonData] = useState([]);

  useEffect(() => {
    API.teamsBySeason(currentSeason).then((result) => console.log(result.data));
    return () => {};
  }, []);
  return <div>Index</div>;
}

export default IndexPage;
