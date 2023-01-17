import { Part, Sampler, Transport, now } from "tone";

/** createSounds
 * Purpose: creates sounds and returns the sounds as well as play functions for them.
 */

export default function createSounds(sequence, volume = 0) {
  const sounds = sequence.map((block) => {
    if (!block) return null;
    const soundToPlay = block.sound
      ? new Sampler({
          urls: { C3: block.sound },
          onload: () => (soundToPlay.volume.value = volume),
        }).toDestination()
      : null;
    return soundToPlay;
  });

  function playOne({ id, pitch, duration }) {
    const soundToPlay = sounds[id];
    return soundToPlay.triggerAttackRelease(`C${pitch}`, duration, now());
  }

  function playSequence({ pitch, duration, playAll }) {
    const toPlay = sounds.map((block, i) => ({
      note: `C${pitch}`,
      time: playAll ? 0 : i * duration,
      sound: block ? block : null,
    }));

    const part = new Part((time, value) => {
      if (value.sound)
        value.sound.triggerAttackRelease(value.note, duration, time);
    }, toPlay);
    Transport.start();
    part.start(0);

    const timerDuration = duration * 1000 * (playAll ? 1 : sounds.length);
    const timer = setTimeout(() => {
      part.stop();
      Transport.stop();
      clearTimeout(timer);
    }, timerDuration);

    return part;
  }

  return { sounds, playOne, playSequence };
}
