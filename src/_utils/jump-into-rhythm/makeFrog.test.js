import makeFrog from "./makeFrog";

jest.mock('tone', () => ({
  Sampler: jest.fn(({ urls }) => ({
    toDestination: jest.fn(() => ({
      urls,
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
  Time: jest.fn((time) => ({
    toSeconds: jest.fn(() => time === '4n' ? 1 : 0.5)
  })),
  Transport: {
    start: jest.fn(),
    stop: jest.fn()
  }
}));

describe('makeFrog function', () => {
  it('should create a sound', () => {
    const { sound } = makeFrog();
    expect(sound.urls).toEqual({ D4: 'file' });
  });
});

describe('hop function', () => {
  it('should play a sound when beats are passed in', () => {
    const { hop } = makeFrog();
    const beats = [
      { duration: ['4n'], isRest: false },
      { duration: ['8n', '8n'], isRest: false },
      { duration: ['4n'], isRest: true },
      { duration: ['4n'], isRest: false },
    ];
    expect(hop({ beats, volume: 0 }).notesToPlay).toEqual([
      { pitch: 'D5', duration: '4n', time: 0, isRest: false },
      { pitch: 'D5', duration: '8n', time: 1, isRest: false },
      { pitch: 'D5', duration: '8n', time: 1.5, isRest: false },
      { pitch: 'D5', duration: '4n', time: 2, isRest: true },
      { pitch: 'D5', duration: '4n', time: 3, isRest: false },
    ]);
  });
})