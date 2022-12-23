import createSound from "./createSound";

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
        return { pitch, sound: 'synth', volume: {} };
      },
    };
  },
  Sampler({ urls }) {
    return {
      connect(pitch) {
        return { sound: urls.C3, pitch, volume: { value: 0 } };
      },
    };
  },
}));

describe('createSound function', () => {
  it('should create a synth sound by default', () => {
    const instrument = createSound({ volume: 0 });
    expect(instrument).toEqual({ pitch: 0, sound: 'synth', volume: { value: 0 } });
  });
  
  it('should create a sound in a new scale', () => {
    const instrument = createSound({ volume: 0, scale: 6 });
    expect(instrument).toEqual({ pitch: 6, sound: 'synth', volume: { value: 0 } });
  });
  
  it('should create a sample out of a sound', () => {
    const instrument = createSound({ volume: 0, sampleId: 'trumpet' });
    expect(instrument).toEqual({ pitch: 0, sound: 'file', volume: { value: 0 } })
  });
});