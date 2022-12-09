import { Time } from "tone";

/** createAnimation
 * Purpose: takes an array of 4 note ids (i.e. ['quarterNote', 'quarterRest', ...]) and dynamically creates an animation for the frog.
 * Found in: Frog.js
 */

const lilyPadLength = 18;

export default function createAnimation(measure) {
  const animation = [
    { transform: 'translate(0, 0)' },
    { transform: 'translate(9.5vw, -75px)', easing: 'ease-out', offset: 0.09 }
  ];
  measure.forEach((note, i) => {
    let lilyPadPosition;
    switch (note) {
      case 'quarterRest':
        lilyPadPosition = lilyPadLength*(i+1);
        animation.push({
          transform: `translate(${lilyPadPosition}vw, -75px)`,
          offset: ((100/6) * (i+1)) / 100
        });
        break;
      case 'quarterNote':
        lilyPadPosition = lilyPadLength*(i+1);
        animation.push({
          transform: `translate(${lilyPadPosition}vw, 0)`,
          offset: ((100/6) * (i+1)) / 100,
          easing: 'ease-in'
        }, {
          transform: `translate(${lilyPadPosition + lilyPadLength/2}vw, -75px)`,
          offset: ((100/6) * (i+1.5)) / 100,
          easing: 'ease-out'
        });
        break;
      case 'eighthNotes':
        lilyPadPosition = lilyPadLength*(i+1);
        animation.push({
          transform: `translate(${lilyPadPosition - 4}vw, 0)`,
          offset: ((100/6) * (i+1)) / 100,
          easing: 'ease-in'
        },{
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
        });
        break;
      default:
        throw new Error('note not found');
    }
  });
  animation.push({ transform: 'translate(95vw, -75px)' });
  return {
    animation,
    duration: Time('1:2').toSeconds() * 1000
  };
};