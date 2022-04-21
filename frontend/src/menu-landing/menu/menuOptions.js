import urls from "../../_routes/routeUrls";

const menuOptions = {
  games: [{
    name: "ART GAMES",
    url: urls.artGames,
    icon: null
  },
  {
    name: "MUSIC GAMES",
    url: urls.musicGames,
    icon: null
  },
  {
    name: "ALL GAMES",
    url: urls.allGames,
    icon: null
  },
  {
    name: "IEP GOALS",
    url: urls.byIEPGoals,
    icon: null
  }],
  tools: [{
    name: "SCORE KEEPER",
    url: urls.scoreKeeperUrl,
    icon: null
  }]
}

export default menuOptions;