import { now, Time } from "tone";
import sample from "_utils/_general/sample";

export default function hop({ beats, volume }) {
  const start = now();
  let seconds = 0;
  const boing = sample({ sound: window['boing'], volume, baseNote: 'D4' });
  beats.forEach((beat, i) => {
    const pitch = pickNote(i);
    const { duration, isRest } = beat;
    duration.forEach(note => {
      if (!isRest) boing.triggerAttackRelease(pitch, note, start + seconds);
      seconds += Time(note).toSeconds();
    });
  });
};

function pickNote(i) {
  if (0 <= i && i < 4) return 'D5';
  if (4 <= i && i < 8) return 'F5';
  if (8 <= i && i < 12) return 'Bb4';
  if (12 <= i && i < 16) return 'C5';
};