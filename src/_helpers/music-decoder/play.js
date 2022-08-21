import { now } from "tone";

/** play
 * Purpose: Takes a note or an array of notes and 'plays' them in the browser.
 * Found in: wordToMusicDecoderReducer.js, AlphabetTable.js, DecoderControls.js
 */

export default function play(notes) {
  const sound = window.wordToMusicSound;
  const start = now();
  if (!Array.isArray(notes)) {
    sound.triggerAttackRelease(`${notes}3`, '4n', start);
  } else {
    let seconds = 0;
    notes.forEach(note => {
      if (note !== '') sound.triggerAttackRelease(`${note}3`, '8n', start + seconds);
      seconds += 0.5;
    });
  };
};