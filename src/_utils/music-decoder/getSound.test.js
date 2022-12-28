import createSound from "./getSound";

jest.mock('tone', () => ({
  PitchShift(pitch) {
    return {
      toDestination() {
        return pitch;
      },
    };
  },
  Synth() {
    return {
      connect(pitch) {
        return {
          pitch,
          sound: 'synth',
          volume: {},
          triggerAttackRelease(note, duration, time) {
            return { note, duration, time }
          }
        };
      },
    };
  },
  Sampler({ urls }) {
    return {
      connect(pitch) {
        return {
          sound: urls.C3,
          pitch,
          volume: {},
          triggerAttackRelease(note, duration, time) {
            return { note, duration, time }
          }
        };
      },
    };
  },
  Part(_, notesToPlay) {
    return {
      notesToPlay,
      start: jest.fn(),
      stop: jest.fn(),
    }
  },
  now() {
    return 0;
  },
  Transport: {
    start: jest.fn(),
    stop: jest.fn(),
  }
}));

describe('createSound function', () => {
  it('should create a synth sound by default', () => {
    const { instrument } = createSound({ volume: 0 });
    expect(instrument.pitch).toBe(0);
    expect(instrument.sound).toBe('synth');
    expect(instrument.volume.value).toBe(0);
  });
  
  it('should create a sound in a new scale', () => {
    const { instrument } = createSound({ volume: 0, scale: 6 });
    expect(instrument.pitch).toBe(6);
    expect(instrument.sound).toBe('synth');
    expect(instrument.volume.value).toBe(0);
  });
  
  it('should create a sample out of a sound', () => {
    const { instrument } = createSound({ volume: 0, sampleId: 'trumpet' });
    expect(instrument.pitch).toBe(0);
    expect(instrument.sound).toBe('file');
    expect(instrument.volume.value).toBe(0);
  });
  
  it('should play a single note', () => {
    const { playSound } = createSound({ volume: 0 });
    expect(playSound('A')).toEqual({ note: 'A3', duration: '4n', time: 0 });
  });

  it('should play an array of notes', () => {
    const { playSound } = createSound({ volume: 0, sampleId: 'trumpet' });
    expect(playSound(['A', 'G', 'F']).notesToPlay).toEqual([
      { note: 'A', time: 0 },
      { note: 'G', time: 0.5 },
      { note: 'F', time: 1 },
    ]);
  });
});