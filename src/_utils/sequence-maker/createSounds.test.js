import { createSounds } from "./createSounds";
import { Part, Sampler, Transport, now } from "tone";

jest.mock('tone', () => ({
  Sampler: jest.fn(({ urls }) => ({
    toDestination: jest.fn(() => ({
      urls,
      triggerAttackRelease: jest.fn((note, duration, time) => ({
        note, duration, time
      }))
    }))
  })),
  Part: jest.fn((_, notesToPlay) => ({
    notesToPlay,
    start: jest.fn(),
    stop: jest.fn(),
  })),
  now: jest.fn(() => 0),
  Transport: {
    start: jest.fn(),
    stop: jest.fn(),
  },
}));

const sequence = [{ sound: 'file' }, { sound: 'file' }, { sound: 'file' }, null];
const { sounds, playOne, playSequence } = createSounds(sequence);

describe('createSounds function', () => {
  it('should create an array of sounds from the sequence', () => {
    expect(sounds[0].urls).toEqual({ C3: 'file' });
    expect(sounds[1].urls).toEqual({ C3: 'file' });
    expect(sounds[2].urls).toEqual({ C3: 'file' });
    expect(sounds[3]).toEqual(null);
    expect(Sampler).toBeCalledTimes(3);
  });
});

describe('playOne function', () => {
  it('should play a single sound', () => {
    const result = playOne({ id: 0, pitch: 4, duration: 3 });
    expect(result).toEqual({ note: 'C4', duration: 3, time: 0 });
    expect(now).toBeCalled();
  });
});

describe('playSequence function', () => {
  it('should play multiple sounds one at a time', () => {
    const result = playSequence({ pitch: '4', duration: 3, playAll: false });
    expect(result.notesToPlay).toEqual([
      { note: 'C4', time: 0, sound: expect.any(Object) },
      { note: 'C4', time: 3, sound: expect.any(Object) },
      { note: 'C4', time: 6, sound: expect.any(Object) },
      { note: 'C4', time: 9, sound: null },
    ]);
    expect(Part).toBeCalled();
    expect(Transport.start).toBeCalled();
  });
  
  it('should play multiple sounds all at once', () => {
    const result = playSequence({ pitch: '4', duration: 3, playAll: true });
    expect(result.notesToPlay).toEqual([
      { note: 'C4', time: 0, sound: expect.any(Object) },
      { note: 'C4', time: 0, sound: expect.any(Object) },
      { note: 'C4', time: 0, sound: expect.any(Object) },
      { note: 'C4', time: 0, sound: null },
    ]);
    expect(Part).toBeCalled();
    expect(Transport.start).toBeCalled();
  });
});