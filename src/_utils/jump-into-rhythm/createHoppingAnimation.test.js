import createHoppingAnimation from "./createHoppingAnimation";
import { LILY_PAD_LENGTH, HOP_HEIGHT } from "./createHoppingAnimation";

const SAMPLE_TIME = 5;

jest.mock('tone', () => ({
  Time: jest.fn(() => ({ 
    toSeconds: jest.fn(() => SAMPLE_TIME)
  }))
}));

describe('createHoppingAnimation function', () => {
  it('should create an animation for different notes', () => {
    const beat = ['quarterNote', 'eighthNotes', 'quarterRest', 'quarterNote'];
    expect(createHoppingAnimation(beat)).toEqual({
      duration: SAMPLE_TIME*1000,
      animation: [
        // Begin
        { transform: 'translate(0, 0)' },
        {
          transform: `translate(${LILY_PAD_LENGTH/2}vw, -${HOP_HEIGHT}vh)`,
          easing: 'ease-out',
          offset: (LILY_PAD_LENGTH/2)/100
        },
        // Beat 1
        {
          transform: `translate(${LILY_PAD_LENGTH}vw, 0)`,
          offset: (100/6) / 100,
          easing: 'ease-in'
        },
        {
          transform: `translate(${LILY_PAD_LENGTH + LILY_PAD_LENGTH/2}vw, -${HOP_HEIGHT}vh)`,
          offset: ((100/6) * 1.5) / 100,
          easing: 'ease-out'
        },
        // Beat 2
        {
          transform: `translate(${LILY_PAD_LENGTH*2 - 4}vw, 0)`,
          offset: ((100/6) * 2) / 100,
          easing: 'ease-in'
        },
        {
          transform: `translate(${LILY_PAD_LENGTH*2}vw, -${HOP_HEIGHT}vh)`,
          offset: ((100/6) * 2.25) / 100,
          easing: 'ease-out'
        },
        {
          transform: `translate(${LILY_PAD_LENGTH*2 + 4}vw, 0)`,
          offset: ((100/6) * 2.5) / 100,
          easing: 'ease-in'
        },
        {
          transform: `translate(${LILY_PAD_LENGTH*2 + LILY_PAD_LENGTH/2}vw, -${HOP_HEIGHT}vh)`,
          offset: ((100/6) * 2.75) / 100,
          easing: 'ease-out'
        },
        // Beat 3
        {
          transform: `translate(${LILY_PAD_LENGTH*3}vw, -${HOP_HEIGHT}vh)`,
          offset: ((100/6) * 3) / 100,
        },
        {
          transform: `translate(${LILY_PAD_LENGTH*3 + 4}vw, -${HOP_HEIGHT}vh)`,
          offset: ((100/6) * 3.75) / 100,
        },
        // Beat 4
        {
          transform: `translate(${LILY_PAD_LENGTH*4}vw, 0)`,
          offset: ((100/6) * 4) / 100,
          easing: 'ease-in'
        },
        {
          transform: `translate(${LILY_PAD_LENGTH*4 + LILY_PAD_LENGTH/2}vw, -${HOP_HEIGHT}vh)`,
          offset: ((100/6) * 4.5) / 100,
          easing: 'ease-out'
        },
        // End
        { transform: `translate(95vw, -${HOP_HEIGHT}vh)` }
    ]});
  });
});