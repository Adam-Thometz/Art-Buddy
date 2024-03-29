const urls = {
  musicGames: "/music",
  artGames: "/art",
  allGames: "/all",
  wordToMusicUrl: "/word-to-music",
  sequenceMakerUrl: "/sequence-maker",
  jumpIntoRhythmUrl: "/jump-into-rhythm",
  instrumentIdUrl: "/instrument-id",
  freePaintUrl: "/free-paint",
  colorTheoryUrl: "/color-theory",
  scoreKeeperUrl: "/score-keeper",
  timeKeeperUrl: "/time-keeper",
  moodMeterUrl: "/mood-meter",
  noiseMeterUrl: "/noise-meter",
};

export const instrumentIdUrls = {
  learn: "/instrument-id/learn",
  learnFamily: "/instrument-id/learn/:family",
  learnInstrument: "/instrument-id/learn/:family/:instrument",
  play: "/instrument-id/play",
  playListening: "/instrument-id/play/listening-skills",
  playListeningLevel: "/instrument-id/play/listening-skills/:level",
  playSongMaker: "/instrument-id/play/song-maker",
};

export const colorTheoryUrls = {
  learn: "/color-theory/learn",
  learnCategory: "/color-theory/learn/:category",
  playMain: "/color-theory/play",
  playLevel: "/color-theory/play/:level",
};

export default urls;
