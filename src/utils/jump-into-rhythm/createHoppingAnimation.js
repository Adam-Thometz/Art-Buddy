import { Time } from "tone";

/** createHoppingAnimation
 * Purpose: takes an array of note ids (i.e. ['quarterNote', 'quarterRest', ...]) and dynamically creates a hopping animation for a frog based on the notes. Made with one helper function for each note option
 * Found in: Frog.js
 */

export const LILY_PAD_LENGTH = 18;
export const HOP_HEIGHT = 7;

export default function createHoppingAnimation(measure) {
  const animation = [
    { transform: "translate(0, 0)" },
    {
      transform: `translate(${LILY_PAD_LENGTH / 2}vw, -${HOP_HEIGHT}vh)`,
      easing: "ease-out",
      offset: LILY_PAD_LENGTH / 2 / 100,
    },
  ];
  measure.forEach(function addToAnimation(note, i) {
    const lilyPadPosition = LILY_PAD_LENGTH * (i + 1);
    if (note === "quarterRest") {
      animation.push(...createQuarterRestAnimation(lilyPadPosition, i));
    } else if (note === "quarterNote") {
      animation.push(...createQuarterNoteAnimation(lilyPadPosition, i));
    } else if (note === "eighthNotes") {
      animation.push(...createEighthNotesAnimation(lilyPadPosition, i));
    }
  });
  animation.push({ transform: `translate(95vw, -${HOP_HEIGHT}vh)` });
  const duration = Time("1:2").toSeconds() * 1000;
  return { animation, duration };
}

function createQuarterNoteAnimation(lilyPadPosition, i) {
  return [
    {
      transform: `translate(${lilyPadPosition}vw, 0)`,
      offset: ((100 / 6) * (i + 1)) / 100,
      easing: "ease-in",
    },
    {
      transform: `translate(${
        lilyPadPosition + LILY_PAD_LENGTH / 2
      }vw, -${HOP_HEIGHT}vh)`,
      offset: ((100 / 6) * (i + 1.5)) / 100,
      easing: "ease-out",
    },
  ];
}

function createEighthNotesAnimation(lilyPadPosition, i) {
  return [
    {
      transform: `translate(${lilyPadPosition - 4}vw, 0)`,
      offset: ((100 / 6) * (i + 1)) / 100,
      easing: "ease-in",
    },
    {
      transform: `translate(${lilyPadPosition}vw, -${HOP_HEIGHT}vh)`,
      offset: ((100 / 6) * (i + 1.25)) / 100,
      easing: "ease-out",
    },
    {
      transform: `translate(${lilyPadPosition + 4}vw, 0)`,
      offset: ((100 / 6) * (i + 1.5)) / 100,
      easing: "ease-in",
    },
    {
      transform: `translate(${
        lilyPadPosition + LILY_PAD_LENGTH / 2
      }vw, -${HOP_HEIGHT}vh)`,
      offset: ((100 / 6) * (i + 1.75)) / 100,
      easing: "ease-out",
    },
  ];
}

function createQuarterRestAnimation(lilyPadPosition, i) {
  return [
    {
      transform: `translate(${lilyPadPosition}vw, -${HOP_HEIGHT}vh)`,
      offset: ((100 / 6) * (i + 1)) / 100,
    },
    {
      transform: `translate(${lilyPadPosition + 4}vw, -${HOP_HEIGHT}vh)`,
      offset: ((100 / 6) * (i + 1.75)) / 100,
    },
  ];
}
