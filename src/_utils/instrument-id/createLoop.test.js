import createLoop from "./createLoop";
import * as melodies from '_media/instrument-id/_melodies-rhythms/melodies'
import * as rhythms from '_media/instrument-id/_melodies-rhythms/rhythms'

jest.mock('tone', () => ({
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
const { loop, playLoop, stopLoop } = createLoop(song, 0);

describe('createLoop function', () => {
  it('should return a loop to be played', () => {
    expect(loop).toEqual([
      { soundToPlay: { C3: 'file' }, melody: expect.any(Array), isRhythm: false },
      { soundToPlay: expect.any(Array), melody: expect.any(Array), isRhythm: true },
      { soundToPlay: { C3: 'file' }, melody: expect.any(Array), isRhythm: false },
    ]);
    expect(loop[1].soundToPlay.length).toBe(5);
    expect(loop[1].soundToPlay.every(hit => hit.C3 === 'file')).toBe(true);
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
  });
});

describe('stopLoop function', () => {
  it('should stop a loop', async () => {
    const playing = await playLoop();
    expect(playing.every(part => part.loop)).toBe(true);
    expect(playing.every(part => part.loopStart === 0)).toBe(true);
    expect(playing.every(part => part.loopEnd === '4m')).toBe(true);
    expect(playing[0].notesToPlay).toEqual(melodies.babySharkMelody);
    expect(playing[1].notesToPlay).toEqual(rhythms.regularRhythm);
    expect(playing[2].notesToPlay).toEqual(melodies.sevenNationArmyMelody);
    const result = stopLoop();
    expect(result.length).toBe(0);
  });
});