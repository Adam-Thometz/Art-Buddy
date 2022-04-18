import urls from "../../_routes/routeUrls";

const menuOptions = {
  games: [{
    name: "ART GAMES",
    url: urls.artGames,
  },
  {
    name: "MUSIC GAMES",
    url: urls.musicGames,
  },
  {
    name: "ALL GAMES",
    url: urls.allGames,
  },
  {
    name: "BY IEP GOALS",
    url: urls.byIEPGoals,
  }],
  tools: [{
    name: "SCORE KEEPER",
    url: urls.scoreKeeperUrl
  }]
}

export default menuOptions;