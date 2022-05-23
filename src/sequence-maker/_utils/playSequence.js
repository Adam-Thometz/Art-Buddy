import { now } from "tone";
import sample from "../../_utils/sample";

export function playSequence({ sequence, pitch, duration, playAll }) {
  const start = now();
  for (let i = 0; i < sequence.length; i++) {
    if (!sequence[i]) continue;

    const { id } = sequence[i];
    if (id === 'stop') continue;

    const buffer = window[`${id}Buffer`];
    const sound = sample(buffer);
    const length = `${duration}m`;
    if (playAll) {
      sound.triggerAttackRelease(`C${pitch}`, length, start);
    } else {
      const seconds = i * duration;
      sound.triggerAttackRelease(`C${pitch}`, length, start + seconds);
    };
  };
};