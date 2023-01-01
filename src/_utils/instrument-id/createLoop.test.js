import createLoop from "./createLoop";
import * as melodies from '_media/instrument-id/_melodies-rhythms/melodies'
import * as rhythms from '_media/instrument-id/_melodies-rhythms/rhythms'
import { Sampler, Part, Transport } from "tone";

jest.mock('tone', () => ({
  __esModule: true,
  Sampler: jest.fn(({ urls }) => ({
    toDestination: jest.fn(() => urls)
  })),
  Part: jest.fn((_, notesToPlay) => ({
    notesToPlay,
    start: jest.fn(),
    stop: jest.fn(),
  })),
  Transport: {
    start: jest.fn(),
    stop: jest.fn(),
  },
}));

const song = [
  { instrumentId: 'electricGuitar', melodyId: 'babySharkMelody' },
  { instrumentId: 'drumSet', melodyId: 'regularRhythm' },
  { instrumentId: 'conga' },
  { instrumentId: 'electricBass', melodyId: 'sevenNationArmyMelody' },
];
const { loopParts, playLoop, stopLoop, getTimeLeft } = createLoop(song, 0);

describe('createLoop function', () => {
  it('should return a loop to be played', () => {
    expect(loopParts).toEqual([
      { soundToPlay: { C3: 'file' }, melody: expect.any(Array), isRhythm: false },
      { soundToPlay: expect.any(Array), melody: expect.any(Array), isRhythm: true },
      { soundToPlay: { C3: 'file' }, melody: expect.any(Array), isRhythm: false },
    ]);
    expect(loopParts[1].soundToPlay.length).toBe(5);
    expect(loopParts[1].soundToPlay.every(hit => hit.C3 === 'file')).toBe(true);
    expect(Sampler).toBeCalledTimes(7);
  });
});

describe('playLoop function', () => {
  it('should play the loop', async () => {
    const result = await playLoop();
    expect(result.every(part => part.loop)).toBe(true);
    expect(result.every(part => part.loopStart === 0)).toBe(true);
    expect(result.every(part => part.loopEnd === '4m')).toBe(true);
    expect(result[0].notesToPlay).toEqual(melodies.babySharkMelody);
    expect(result[1].notesToPlay).toEqual(rhythms.regularRhythm);
    expect(result[2].notesToPlay).toEqual(melodies.sevenNationArmyMelody);
    expect(Part).toBeCalledTimes(3);
    expect(Transport.start).toBeCalled();
    expect(result[0].start).toBeCalled();
    expect(result[1].start).toBeCalled();
    expect(result[2].start).toBeCalled();
  });
});

describe('stopLoop function', () => {
  it('should stop a loop', async () => {
    await playLoop();
    const result = stopLoop();
    expect(result.length).toBe(0);
    expect(Transport.stop).toBeCalled();
  });
});

describe('getTimeLeft function', () => {
  it('should return the correct amount of time', async () => {
    await playLoop();
    const timer = setTimeout(() => {
      const result = getTimeLeft();
      expect(result).toBe(8000);
      clearTimeout(timer);
    }, 2000);
    const timer2 = setTimeout(() => {
      const result = getTimeLeft();
      expect(result).toBe(6000);
      clearTimeout(timer2);
    }, 4000);
  });
});