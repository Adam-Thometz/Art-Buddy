import { now } from "tone";
import sample from "../_utils/sample";

export function playSequence({ sequence, pitch, duration, playAll, volume }) {
  const start = now();
  for (let i = 0; i < sequence.length; i++) {
    if (!sequence[i]) continue;

    const { soundId } = sequence[i];
    if (soundId === 'stop') continue;

    const buffer = window[`${soundId}Buffer`];
    const sound = sample({ sound: buffer, volume });

    const pitchToPlay = `C${pitch}`;
    const length = `${duration}m`;
    if (playAll) {
      sound.triggerAttackRelease(pitchToPlay, length, start);
    } else {
      const seconds = i * duration;
      sound.triggerAttackRelease(pitchToPlay, length, start + seconds);
    };
  };
};

export function playOne({ soundId, pitch, duration, volume }) {
  if (soundId === 'stop') return;
  const buffer = window[`${soundId}Buffer`];
  const sound = sample({ sound: buffer, volume });
  sound.triggerAttackRelease(`C${pitch}`, `${duration}m`);
};