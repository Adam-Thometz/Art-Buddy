import createSound from "./getSound";
import { PitchShift, Synth, Sampler, Part, Transport } from "tone";

jest.mock('tone', () => ({
  PitchShift: jest.fn((pitch) => ({
    toDestination: jest.fn(() => pitch),
  })),
  Synth: jest.fn(() => ({
    connect: jest.fn((pitch) => ({
      pitch,
      sound: 'synth',
      volume: {},
      triggerAttackRelease: jest.fn((note, duration, time) => ({
        note, duration, time
      }))
    })),
  })),
  Sampler: jest.fn(({ urls }) => ({
    connect: jest.fn((pitch) => ({
      sound: urls.C3,
      pitch,
      volume: {},
      triggerAttackRelease: jest.fn((note, duration, time) => ({
        note, duration, time
      }))
    })),
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

describe('getSound function', () => {
  it('should create a synth sound by default', () => {
    const { instrument } = createSound({ volume: 0 });
    expect(instrument.pitch).toBe(0);
    expect(instrument.sound).toBe('synth');
    expect(instrument.volume.value).toBe(0);
    expect(PitchShift).toBeCalled();
    expect(Synth).toBeCalled();
  });
  
  it('should create a sound in a new scale', () => {
    const { instrument } = createSound({ volume: 0, scale: 6 });
    expect(instrument.pitch).toBe(6);
    expect(instrument.sound).toBe('synth');
    expect(instrument.volume.value).toBe(0);
    expect(PitchShift).toBeCalled();
    expect(Synth).toBeCalled();
  });
  
  it('should create a sample out of a sound', () => {
    const { instrument } = createSound({ volume: 0, sampleId: 'trumpet' });
    expect(instrument.pitch).toBe(0);
    expect(instrument.sound).toBe('file');
    expect(instrument.volume.value).toBe(0);
    expect(PitchShift).toBeCalled();
    expect(Sampler).toBeCalled();
  });
});

describe('playSound function', () => {
  it('should play a single note', () => {
    const { playSound } = createSound({ volume: 0 });
    expect(playSound('A')).toEqual({ note: 'A3', duration: '4n' });
  });

  it('should play an array of notes', () => {
    const { playSound } = createSound({ volume: 0, sampleId: 'trumpet' });
    expect(playSound(['A', 'G', 'F']).notesToPlay).toEqual([
      { note: 'A', time: 0 },
      { note: 'G', time: 0.5 },
      { note: 'F', time: 1 },
    ]);
    expect(Part).toBeCalled();
    expect(Transport.start).toBeCalled();
  });
});