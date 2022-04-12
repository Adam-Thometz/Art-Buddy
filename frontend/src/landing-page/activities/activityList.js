import urls from "../../_nav-routes/routeUrls";

const types = ['Music', 'Art', 'Misc'];

const activities = {
  wordToMusicDecoder: {
    name: 'Word To Music Decoder',
    img: '',
    url: urls.wordToMusicUrl,
    activityType: types[0],
    description: 'Turn words into music!'
  },
  sequecnceMaker: {
    name: 'Sequence Maker',
    img: '',
    url: urls.sequencerUrl,
    activityType: types[0],
    description: 'Put different sounds together and see what you get!'
  },
  scoreKeeper: {
    name: 'Score Keeper',
    img: '',
    url: urls.scoreKeeperUrl,
    activityType: types[2],
    description: 'An all-purpose score keeper!'
  }
}

export default activities;