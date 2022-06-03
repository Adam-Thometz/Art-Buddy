import { now } from "tone";

export default function play(notes) {
  if (process.env.NODE_ENV === 'test') return;
  
  const sound = window.wordToMusicSound;
  const start = now();
  if (!Array.isArray(notes)) {
    sound.triggerAttackRelease(`${notes}3`, '4n', start);
  } else {
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const seconds = i / 2;
      sound.triggerAttackRelease(`${note}3`, '8n', start + seconds);
    };
  };
};