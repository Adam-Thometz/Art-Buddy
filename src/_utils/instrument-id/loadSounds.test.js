import loadSounds from "./loadSounds";
import { Sampler, Part, Transport } from 'tone';

jest.mock('tone', () => ({
  __esModule: true,
  Sampler: jest.fn(() => ({
    toDestination: jest.fn()
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

describe('loadSounds function', () => {
  it('should load a scale for non-rhythmic instruments', () => {
    const { sounds } = loadSounds({ ids: ['synthesizer'], volume: 0, isTest: false });
    expect(sounds.synthesizer).toEqual(expect.any(Function));
  });
  
  it('should load a beat for rhythmic instruments', () => {
    const { sounds } = loadSounds({ ids: ['drumSet'], volume: 0, isTest: false });
    expect(sounds.drumSet).toEqual(expect.any(Function));
  });
});

describe('play function', () => {
  it('should play a scale for non-rhythmic instruments when isTest is false', () => {
    const { play } = loadSounds({ ids: ['synthesizer'], volume: 0, isTest: false });
    const { notesToPlay } = play(['synthesizer']);
    expect(notesToPlay.length).toBe(8);
    expect(notesToPlay.map(note => note.note)).toEqual(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4']);
    expect(Sampler).toBeCalled();
    expect(Part).toBeCalled();
    expect(Transport.start).toBeCalled();
    Sampler.mockClear();
  });
  
  it('should play a beat for rhythmic instruments when isTest is false', () => {
    const { play } = loadSounds({ ids: ['drumSet'], volume: 0, isTest: false });
    const { notesToPlay } = play(['drumSet']);
    expect(notesToPlay.length).toBe(10);
    expect(Sampler).toBeCalledTimes(10);
    expect(Part).toBeCalled();
    expect(Transport.start).toBeCalled();
    Sampler.mockClear();
    Part.mockClear();
  });
  
  it('should play a scale for non-rhythmic instruments when isTest is true', () => {
    const { play } = loadSounds({ ids: ['synthesizer'], volume: 0, isTest: true });
    const { notesToPlay } = play(['synthesizer']);
    expect(notesToPlay.length).toBe(5);
    expect(notesToPlay.map(note => note.note)).toEqual(['C3', 'D3', 'E3', 'F3', 'G3']);
    expect(Sampler).toBeCalled();
    expect(Part).toBeCalled();
    Sampler.mockClear();
  });
  
  it('should play a beat for rhythmic instruments when isTest is true', () => {
    const { play } = loadSounds({ ids: ['drumSet'], volume: 0, isTest: true });
    const { notesToPlay } = play(['drumSet']);
    expect(notesToPlay.length).toBe(5);
    expect(Sampler).toBeCalledTimes(5);
    expect(Part).toBeCalled();
    Sampler.mockClear();
    Part.mockClear();
  });
});