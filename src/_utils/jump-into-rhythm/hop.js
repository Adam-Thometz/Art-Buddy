import { Part, Sampler, Time, Transport } from "tone";


export default function hop({ beats, volume }) {
  const QUARTER_NOTE_TIME = Time('4n').toSeconds();
  const boing = new Sampler({ urls: { D4: window['boing'] } }).toDestination();
  boing.volume.value = volume;

  const toPlay = createNoteOrder(beats);
  const part = new Part(((time, value) => {
    if (!value.isRest) boing.triggerAttackRelease(value.pitch, value.duration, time);
  }), toPlay);
  part.start(QUARTER_NOTE_TIME);
  Transport.start();
  
  const timerDuration = (Time(`${beats.length / 4}m`).toSeconds() + QUARTER_NOTE_TIME) * 1000;
  const timer = setTimeout(() => {
    part.stop();
    Transport.stop();
    clearTimeout(timer);
  }, timerDuration);
};

function createNoteOrder(beats) {
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