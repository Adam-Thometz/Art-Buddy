import urls from "../../_routes/routeUrls";

const types = ['Music', 'Art', 'Misc'];

const activities = [
  {
    name: 'Word To Music Decoder',
    img: '',
    url: urls.wordToMusicUrl,
    activityType: types[0],
    description: 'Turn words into music!'
  },
  {
    name: 'Sequence Maker',
    img: '',
    url: urls.sequencerUrl,
    activityType: types[0],
    description: 'Put sounds together and hear what you get!'
  },
  {
    name: 'Score Keeper',
    img: '',
    url: urls.scoreKeeperUrl,
    activityType: types[2],
    description: 'An all-purpose score keeper!'
  }
]

export default activities;