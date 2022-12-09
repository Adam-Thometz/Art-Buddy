import { Time } from "tone";

/** createAnimation
 * Purpose: dynamically creates an animation for the frog based on the rhythm input.
 * Found in: Frog.js
 */

export default function createAnimation(measure) {
  const animation = [
    { transform: 'translate(0, 0)' },
    { transform: 'translate(9.5vw, -75px)', easing: 'ease-out', offset: 0.095 }
  ];
  measure.forEach((note, i) => {
    let lilyPadPosition;
    switch (note.id) {
      case 'quarterRest':
        lilyPadPosition = 19*(i+1);
        animation.push({
          transform: `translate(${lilyPadPosition}vw, -75px)`,
          offset: ((100/6) * (i+1)) / 100
        });
        break;
      case 'quarterNote':
        lilyPadPosition = 19*(i+1);
        animation.push({
          transform: `translate(${lilyPadPosition}vw, 0)`,
          offset: ((100/6) * (i+1)) / 100,
          easing: 'ease-in'
        }, {
          transform: `translate(${lilyPadPosition + 9.5}vw, -75px)`,
          offset: ((100/6) * (i+1.5)) / 100,
          easing: 'ease-out'
        });
        break;
      case 'eighthNotes':
        lilyPadPosition = 19*(i+1);
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
          transform: `translate(${lilyPadPosition + 9.5}vw, -75px)`,
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