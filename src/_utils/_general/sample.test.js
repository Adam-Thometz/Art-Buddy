import sample from "./sample";

jest.mock('tone', () => ({
  Sampler({ urls }) {
    return {
      urls,
      volume: { value: 0 },
      toDestinationActive: false,
      toDestination() {
        return {
          ...this,
          toDestinationActive: true
        };
      },
    };
  },
}));

describe('sample function', () => {
  it('should return a sample', () => {
    const result = sample({ sound: 'trumpet', volume: 0 });
    expect(result.urls).toEqual({ C3: 'trumpet' });
    expect(result.volume.value).toBe(0);
    expect(result.toDestinationActive).toBe(true);
  });
  
  it('should unset the sample as the destination', () => {
    const result = sample({ sound: 'trumpet', volume: 0, toDestination: false });
    expect(result.toDestinationActive).toBe(false);
  });

  it('should set a unique base note for the sample', () => {
    const result = sample({ sound: 'trumpet', volume: 0, baseNote: 'G2' });
    expect(result.urls).toEqual({ G2: 'trumpet' });
  });
});