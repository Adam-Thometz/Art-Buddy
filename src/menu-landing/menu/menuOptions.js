import urls from "../../_routes/routeUrls";

import artIcon from './_icons/option-icons/art-icon.png';
import musicIcon from './_icons/option-icons/music-icon.png';
import allIcon from './_icons/option-icons/all-icon.png';
import iepIcon from './_icons/option-icons/iep-icon.png';

import scoreKeeperIcon from './_icons/option-icons/score-keeper.png'
import timeKeeperIcon from './_icons/option-icons/time-keeper.png'

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
      url: urls.scoreKeeper,
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