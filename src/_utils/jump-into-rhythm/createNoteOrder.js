import { Time } from "tone";

export default function createNoteOrder(beats) {
  const toPlay = [];
  let time = 0;
  for (let i = 0; i < beats.length; i++) {
    for (let note of beats[i].duration) {
      toPlay.push({
        pitch: pickNote(i),
        duration: note,
        time,
        isRest: beats[i].isRest
      });
      time += Time(note).toSeconds();
    };
  };
  return toPlay;
};

function pickNote(i) {
  if (0 <= i && i < 4) return 'D5';
  if (4 <= i && i < 8) return 'F5';
  if (8 <= i && i < 12) return 'Bb4';
  if (12 <= i && i < 16) return 'C5';
};