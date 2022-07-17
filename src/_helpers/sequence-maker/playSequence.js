import { now } from "tone";
import sample from "../_utils/sample";

/** playSequence:
 * Purpose: plays the sounds in the sequence. May play one at a time or altogether.
 * Found in: Sequence.js
 */

export function playSequence({ sequence, pitch, duration, playAll, volume }) {
  const start = now();
  sequence.forEach((block, i) => {
    if (!block) return;

    const { soundId } = block;
    if (soundId === 'stop') return;

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
  });
};

/** playOne:
 * Purpose: plays one sound at a time for when a user clicks on a sound card in the sequence
 * Found in: SequenceBlock.js
 */

export function playOne({ soundId, pitch, duration, volume }) {
  if (soundId === 'stop') return;
  const buffer = window[`${soundId}Buffer`];
  const sound = sample({ sound: buffer, volume });
  sound.triggerAttackRelease(`C${pitch}`, `${duration}m`);
};