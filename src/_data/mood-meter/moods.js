/** Data Structure for moods
 * A 2D array that maps out emotions.
 * Valence is aquired on the y axis, energy on the x axis
 * eg. const mood = moods[0][2]
 * console.log(mood) => 'Angry'
 * 
 * sad song: 'Do You Wanna Build a Snowman?', Frozen soundtrack
 * disappointed song: 'Beauty and the Beast', Ariana Grande/John Legend
 * angry song: 'Thunder' by Imagine Dragons
 * tired song: 'You've Got a Friend in Me', Toy Story soundtrack
 * bored song: 'Be Kind', DJ Marshmello & Halsey
 * curious song: 'Speed Me Up', Wiz Khalifa
 * relaxed song: 'Somewhere Over the Rainbow', Israel "IZ" Kamakawiwo'ole
 * happy song: 'In the Summertime', Mungo Jerry
 * excited song: 'Better When I'm Dancin'', Meghan
*/

function generateSong(uri) {
  return `https://www.youtube.com/watch?v=${uri}`
}

const moods = [
  [
    { name: 'Sad', songURL: generateSong('TeQ_TTyLGMs') },
    { name: 'Disappointed', songURL: generateSong('axySrE0Kg6k') },
    { name: 'Angry', songURL: generateSong('fKopy74weus') }
  ],
  [
    { name: 'Tired', songURL: generateSong('cNIg45GZ_ts') },
    { name: 'Bored', songURL: generateSong('ePao0cTGG-o') },
    { name: 'Curious', songURL: generateSong('dCuCpVPkWDY') }
  ],
  [
    { name: 'Relaxed', songURL: generateSong('w_DKWlrA24k') },
    { name: 'Happy', songURL: generateSong('wvUQcnfwUUM') },
    { name: 'Excited', songURL: generateSong('pkCyfBibIbI') }
  ],
];

export default moods;