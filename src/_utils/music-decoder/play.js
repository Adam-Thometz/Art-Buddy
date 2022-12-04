import { now, Part, Transport } from "tone";

/** play
 * Purpose: Takes a note or an array of notes and 'plays' them in the browser.
 * Found in: wordToMusicDecoderReducer.js, AlphabetTable.js, DecoderControls.js
 */

export default function play(notes) {
  const sound = window.wordToMusicSound;
  if (!Array.isArray(notes)) {
    sound.triggerAttackRelease(`${notes}3`, '4n', now());
    return;
  }
  const toPlay = notes.map((note, i) => ({ note, time: i/2 }));
  const part = new Part(((time, value) => {
    sound.triggerAttackRelease(`${value.note}3`, '8n', time);
  }), toPlay);
  Transport.start();
  part.start(0);

  const timer = setTimeout(() => {
    part.stop();
    Transport.stop();
    clearTimeout(timer);
  }, 500*(notes.length));
};