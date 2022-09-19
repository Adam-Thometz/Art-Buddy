import urls from "_data/_routes/routeUrls";

import artIcon from '_media/menu/option-icons/art-icon.png';
import musicIcon from '_media/menu/option-icons/music-icon.png';
import allIcon from '_media/menu/option-icons/all-icon.png';
import iepIcon from '_media/menu/option-icons/iep-icon.png';

import scoreKeeperIcon from '_media/menu/option-icons/score-keeper.png';
import timeKeeperIcon from '_media/menu/option-icons/time-keeper.png';

const menuOptions = {
  games: [
    {
      name: "ART GAMES",
      url: urls.artGames,
      icon: artIcon,
      active: true
    },
    {
      name: "MUSIC GAMES",
      url: urls.musicGames,
      icon: musicIcon,
      active: true
    },
    {
      name: "ALL GAMES",
      url: urls.allGames,
      icon: allIcon,
      active: true
    },
    {
      name: "IEP GOALS",
      url: urls.byIEPGoals,
      icon: iepIcon,
      active: false
    }
  ],
  tools: [
    {
      name: "SCORE KEEPER",
      url: urls.scoreKeeper,
      icon: scoreKeeperIcon,
      active: true
    },
    {
      name: 'TIME KEEPER',
      url: urls.timeKeeper,
      icon: timeKeeperIcon,
      active: true
    },
    {
      name: 'MOOD METER',
      url: null,
      icon: null,
      active: false
    },
    {
      name: 'NOISE METER',
      url: null,
      icon: null,
      active: false
    }
  ]
};

export default menuOptions;