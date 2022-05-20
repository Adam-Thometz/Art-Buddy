import { now } from "tone";
import sample from "../../_utils/sample";

export function playSequence({ sequence, pitch, playAll }) {
  const start = now();
  for (let i = 0; i < sequence.length; i++) {
    if (!sequence[i]) continue;

    const { id } = sequence[i];
    if (id === 'stop') continue;

    const buffer = window[`${id}Buffer`];
    const sound = sample(buffer);
    if (playAll) {
      sound.triggerAttackRelease(`C${pitch}`, '1m', start);
    } else {
      const seconds = i * 2;
      sound.triggerAttackRelease(`C${pitch}`, '2m', start + seconds);
    };
  };
};