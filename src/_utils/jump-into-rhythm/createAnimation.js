import { Time } from "tone";

/** createAnimation
 * Purpose: takes an array of note ids (i.e. ['quarterNote', 'quarterRest', ...]) and dynamically creates a hopping animation for a frog based on the notes. Made with one helper function for each note option
 * Found in: Frog.js
 */

const lilyPadLength = 18;

export default function createAnimation(measure) {
  const animation = [
    { transform: 'translate(0, 0)' },
    { transform: `translate(${lilyPadLength/2}vw, -75px)`, easing: 'ease-out', offset: (lilyPadLength/2)/100 }
  ];
  measure.forEach((note, i) => {
    const lilyPadPosition = lilyPadLength*(i+1);
    if (note === 'quarterRest') {
      animation.push(...createQuarterRestAnimation(lilyPadPosition, i));
    } else if (note === 'quarterNote') {
      animation.push(...createQuarterNoteAnimation(lilyPadPosition, i));
    } else if (note === 'eighthNotes') {
      animation.push(...createEighthNotesAnimation(lilyPadPosition, i));
    }
  });
  animation.push({ transform: 'translate(95vw, -75px)' });
  const duration = Time('1:2').toSeconds() * 1000;
  return { animation, duration };
};

function createQuarterNoteAnimation(lilyPadPosition, i) {
  return [
    {
      transform: `translate(${lilyPadPosition}vw, 0)`,
      offset: ((100/6) * (i+1)) / 100,
      easing: 'ease-in'
    }, {
      transform: `translate(${lilyPadPosition + lilyPadLength/2}vw, -75px)`,
      offset: ((100/6) * (i+1.5)) / 100,
      easing: 'ease-out'
    }
  ];
};

function createEighthNotesAnimation(lilyPadPosition, i) {
  return [
    {
      transform: `translate(${lilyPadPosition - 4}vw, 0)`,
      offset: ((100/6) * (i+1)) / 100,
      easing: 'ease-in'
    }, {
      transform: `translate(${lilyPadPosition}vw, -75px)`,
      offset: ((100/6) * (i+1.25)) / 100,
      easing: 'ease-out'
    }, {
      transform: `translate(${lilyPadPosition + 4}vw, 0)`,
      offset: ((100/6) * (i+1.5)) / 100,
      easing: 'ease-in'
    }, {
      transform: `translate(${lilyPadPosition + lilyPadLength/2}vw, -75px)`,
      offset: ((100/6) * (i+1.75)) / 100,
      easing: 'ease-out'
    }
  ];
};

function createQuarterRestAnimation(lilyPadPosition, i) {
  return [
    {
      transform: `translate(${lilyPadPosition}vw, -75px)`,
      offset: ((100/6) * (i+1)) / 100
    }
  ];
};