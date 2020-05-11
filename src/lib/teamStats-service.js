import axios from "axios";
class teamStatsAPI {
  constructor() {
    this.api = axios.create({
      baseURL: "https://statsapi.mlb.com/api/v1/",
    });
  }

  getDivisionStandings = (season, leagueId) => {
    return this.api.get(`standings?=leagueId${leagueId}`);
  };
}
