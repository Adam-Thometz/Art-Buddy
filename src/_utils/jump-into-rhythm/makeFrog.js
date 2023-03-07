import boing from "_media/jump-into-rhythm/boing.mp3";
import { Part, Sampler, Time, Transport } from "tone";
import createNoteOrder from "./createNoteOrder";

export default function makeFrog() {
  const sound = new Sampler({ urls: { D4: boing } }).toDestination();

  function hop({ rhythm, volume }) {
    sound.volume.value = volume;
    const QUARTER_NOTE_TIME = Time("4n").toSeconds();

    const toPlay = createNoteOrder(rhythm);
    const part = new Part((time, value) => {
      if (!value.isRest) sound.triggerAttackRelease(value.pitch, value.duration, time);
    }, toPlay);
    part.start(QUARTER_NOTE_TIME);
    Transport.start();

    const timerDuration = (Time(`${rhythm.length / 4}m`).toSeconds() + QUARTER_NOTE_TIME) * 1000;
    const timer = setTimeout(() => {
      part.stop();
      Transport.stop();
      clearTimeout(timer);
    }, timerDuration);
    return part;
  }

  return { sound, hop };
}
