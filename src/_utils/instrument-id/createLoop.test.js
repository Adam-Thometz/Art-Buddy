import createLoop from "./createLoop";
import { Sampler, Part, Transport } from "tone";
import TimeMock from "_testUtils/mocks/timeMock";
import { ELECTRIC_GUITAR } from "_media/instrument-id/soundImports";
import { ROOT_URL } from "_media/awsS3Root";

jest.mock("tone", () => ({
  __esModule: true,
  Sampler: jest.fn(({ urls }) => ({
    toDestination: jest.fn(() => urls),
  })),
  Part: jest.fn((_, notesToPlay) => ({
    notesToPlay,
    progress: 0,
    start: jest.fn(),
    stop: jest.fn(),
  })),
  Transport: {
    start: jest.fn(),
    stop: jest.fn(),
  },
  Time: jest.fn(() => ({
    toSeconds: jest.fn(() => 10),
  })),
}));

const song = [
  { instrumentId: "electricGuitar", melodyId: "babySharkMelody" },
  { instrumentId: "drumSet", melodyId: "regularRhythm" },
  { instrumentId: "conga" },
  null,
];
const { loopParts, playLoop, stopLoop, getTimeLeft } = createLoop(song, 0);

describe("createLoop function", () => {
  it("should return a loop to be played", () => {
    expect(loopParts).toEqual([
      {
        soundToPlay: { C3: ELECTRIC_GUITAR },
        melody: expect.any(Array),
        isRhythm: false,
      },
      {
        soundToPlay: expect.any(Array),
        melody: expect.any(Array),
        isRhythm: true,
      },
    ]);
    expect(loopParts[1].soundToPlay.length).toBe(5);
    expect(loopParts[1].soundToPlay.every((hit) => 
      hit.C3.startsWith(`${ROOT_URL}/instrument-id/sounds/percussion/drum-set`)
    )).toBe(true);
    expect(Sampler).toBeCalledTimes(6);
  });
});

describe("playLoop function", () => {
  it("should play the loop", async () => {
    const result = await playLoop();
    expect(result.every((part) => part.loop)).toBe(true);
    expect(result.every((part) => part.loopStart === 0)).toBe(true);
    expect(result.every((part) => part.loopEnd === "4m")).toBe(true);
    result.forEach((part, i) => expect(part.notesToPlay).toEqual(loopParts[i].melody));
    expect(Part).toBeCalledTimes(2);
    expect(Transport.start).toBeCalled();
    result.forEach((part) => expect(part.start).toBeCalled());
  });
});

describe("stopLoop function", () => {
  it("should stop a loop", async () => {
    await playLoop();
    const result = stopLoop();
    expect(result.length).toBe(0);
    expect(Transport.stop).toBeCalled();
  });
});

describe("getTimeLeft function", () => {
  it("should return the correct amount of time", async () => {
    const time = new TimeMock();
    const loop = await playLoop();
    time.loopTravel(2000, loop);
    const result = getTimeLeft();
    expect(result).toBe(8000);
    time.loopTravel(2000, loop);
    const result2 = getTimeLeft();
    expect(result2).toBe(6000);
    time.teardown();
  });
});
