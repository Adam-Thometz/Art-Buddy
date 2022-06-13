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
    const pitchToPlay = `C${pitch}`;
    if (playAll) {
      sound.triggerAttackRelease(pitchToPlay, length, start);
    } else {
      const seconds = i * duration;
      sound.triggerAttackRelease(pitchToPlay, length, start + seconds);
    };
  };
};

export function playOne({ soundId, pitch, duration }) {
  if (soundId === 'stop') return;
  const buffer = window[`${soundId}Buffer`];
  const sound = sample(buffer);
  sound.triggerAttackRelease(`C${pitch}`, `${duration}m`);
};