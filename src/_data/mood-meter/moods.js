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

const moods = [
  [
    { name: "Sad", songURI: "TeQ_TTyLGMs" },
    { name: "Disappointed", songURI: "axySrE0Kg6k" },
    { name: "Angry", songURI: "fKopy74weus" },
  ],
  [
    { name: "Tired", songURI: "cNIg45GZ_ts" },
    { name: "Bored", songURI: "ePao0cTGG-o" },
    { name: "Curious", songURI: "dCuCpVPkWDY" },
  ],
  [
    { name: "Relaxed", songURI: "w_DKWlrA24k" },
    { name: "Happy", songURI: "wvUQcnfwUUM" },
    { name: "Excited", songURI: "pkCyfBibIbI" },
  ],
];

export default moods;
