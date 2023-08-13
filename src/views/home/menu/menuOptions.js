import urls from "routes/routeUrls";

import {
  MUSIC_GAMES,
  ART_GAMES,
  ALL_GAMES,
  IEP_ICON,
  SCORE_KEEPER,
  TIME_KEEPER,
  MOOD_METER,
  NOISE_METER,
} from "assets/menu/menu.assets";

const menuOptions = {
  games: [
    {
      name: "ART GAMES",
      url: urls.artGames,
      icon: ART_GAMES,
    },
    {
      name: "MUSIC GAMES",
      url: urls.musicGames,
      icon: MUSIC_GAMES,
    },
    {
      name: "ALL GAMES",
      url: urls.allGames,
      icon: ALL_GAMES,
    },
    {
      name: "COMMON CORE",
      url: null,
      icon: IEP_ICON,
    },
  ],
  tools: [
    {
      name: "SCORE KEEPER",
      url: urls.scoreKeeperUrl,
      icon: SCORE_KEEPER,
    },
    {
      name: "TIME KEEPER",
      url: urls.timeKeeperUrl,
      icon: TIME_KEEPER,
    },
    {
      name: "MOOD METER",
      url: urls.moodMeterUrl,
      icon: MOOD_METER,
    },
    {
      name: "NOISE METER",
      url: urls.noiseMeterUrl,
      icon: NOISE_METER,
    },
  ],
};

export default menuOptions;
