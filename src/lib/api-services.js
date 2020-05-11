import axios from "axios";

class API {
  //See if possible to implement this without classes
  constructor() {
    this.api = axios.create({
      baseURL: "http://lookup-service-prod.mlb.com/json",
    });
  }

  playerSearch = (searchQuery, active_sw = "Y") => {
    const activeOnly = active_sw === "Y" ? "Y" : "N";
    return this.api.get(
      `named.search_player_all.bam?sport_code='mlb'&active_sw='${activeOnly}'&name_part='${searchQuery}%25'`
    );
  };

}

const APIservices = new API();

export default APIservices;
