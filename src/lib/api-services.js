import axios from "axios";

class API {
  //See if possible to implement this without classes
  constructor() {
    this.api = axios.create({
      baseURL: "http://lookup-service-prod.mlb.com/json/named.",
    });
  }

  playerSearch = (searchQuery, active_sw = "Y") => {
    return this.api.get(
      `.search_player_all.bam?sport_code=\'mlb\'&active_sw=${active_sw}&name_part={name_part}`
    );
  };
}

const APIservices = new API();

export default APIservices;
