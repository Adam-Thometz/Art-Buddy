import urls from "../../_routes/routeUrls";

import artIcon from './option-icons/art-icon.png';
import musicIcon from './option-icons/music-icon.png';
import allIcon from './option-icons/all-icon.png';
import iepIcon from './option-icons/iep-icon.png';

import scoreKeeperIcon from './option-icons/score-keeper.png'
import timeKeeperIcon from './option-icons/time-keeper.png'

const menuOptions = {
  games: [
    {
      name: "ART GAMES",
      url: urls.artGames,
      icon: artIcon
    },
    {
      name: "MUSIC GAMES",
      url: urls.musicGames,
      icon: musicIcon
    },
    {
      name: "ALL GAMES",
      url: urls.allGames,
      icon: allIcon
    },
    {
      name: "IEP GOALS",
      url: urls.byIEPGoals,
      icon: iepIcon
    }
  ],
  tools: [
    {
      name: "SCORE KEEPER",
      url: urls.scoreKeeperUrl,
      icon: scoreKeeperIcon
    },
    {
      name: 'TIME KEEPER',
      url: null,
      icon: timeKeeperIcon
    },
    {
      name: 'MOOD METER',
      url: null,
      icon: null
    },
    {
      name: 'NOISE METER',
      url: null,
      icon: null
    }
  ]
}

export default menuOptions;