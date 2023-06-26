import urls from "_routes/routeUrls";

import artIcon from "_media/menu/option-icons/art-icon.png";
import musicIcon from "_media/menu/option-icons/music-icon.png";
import allIcon from "_media/menu/option-icons/all-icon.png";
import iepIcon from "_media/menu/option-icons/iep-icon.png";

import scoreKeeperIcon from "_media/menu/option-icons/score-keeper.png";
import timeKeeperIcon from "_media/menu/option-icons/time-keeper.png";
import moodMeterIcon from "_media/menu/option-icons/mood-meter.png";
import noiseMeterIcon from "_media/menu/option-icons/noise-meter.png";

const menuOptions = {
  games: [
    {
      name: "ART GAMES",
      url: urls.artGames,
      icon: artIcon,
      active: true,
    },
    {
      name: "MUSIC GAMES",
      url: urls.musicGames,
      icon: musicIcon,
      active: true,
    },
    {
      name: "ALL GAMES",
      url: urls.allGames,
      icon: allIcon,
      active: true,
    },
    {
      name: "COMMON CORE",
      url: null,
      icon: iepIcon,
      active: true,
    },
  ],
  tools: [
    {
      name: "SCORE KEEPER",
      url: urls.scoreKeeperUrl,
      icon: scoreKeeperIcon,
      active: true,
    },
    {
      name: "TIME KEEPER",
      url: urls.timeKeeperUrl,
      icon: timeKeeperIcon,
      active: true,
    },
    {
      name: "MOOD METER",
      url: urls.moodMeterUrl,
      icon: moodMeterIcon,
      active: true,
    },
    {
      name: "NOISE METER",
      url: urls.noiseMeterUrl,
      icon: noiseMeterIcon,
      active: true,
    },
  ],
};

export default menuOptions;
