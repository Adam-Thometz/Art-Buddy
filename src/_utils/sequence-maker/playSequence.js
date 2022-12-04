import { Part, Transport } from "tone";
import sample from "../_general/sample";

/** playSequence:
 * Purpose: plays the sounds in the sequence. May play one at a time or altogether.
 * Found in: Sequence.js
 */

export function playSequence({ sequence, pitch, duration, playAll, volume }) {
  const toPlay = sequence.map((block, i) => ({
    note: `C${pitch}`,
    time: playAll ? 0 : i * duration,
    sound: block && block.sound
      ? sample({ sound: window[`${block.soundId}Buffer`], volume })
      : null
  }));
  const part = new Part(((time, value) => {
    if (value.sound) value.sound.triggerAttackRelease(value.note, duration, time);
  }), toPlay);
  Transport.start();
  part.start(0);

  const timerDuration = (duration*1000) * (playAll ? 1 : sequence.length);
  const timer = setTimeout(() => {
    part.stop();
    Transport.stop();
    clearTimeout(timer);
  }, timerDuration);
};

/** playOne:
 * Purpose: plays one sound at a time for when a user clicks on a sound card in the sequence
 * Found in: SequenceBlock.js
 */

export function playOne({ soundId, pitch, duration, volume }) {
  if (soundId === 'stop') return;
  const buffer = window[`${soundId}Buffer`];
  const sound = sample({ sound: buffer, volume });
  sound.triggerAttackRelease(`C${pitch}`, duration);
};