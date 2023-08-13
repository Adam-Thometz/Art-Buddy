import timeKeeperReducer, { initialState, toggleTimer, toggleMute, setMillisecondsLeftInSecond, addTimeBlocks, decrementOneSecond, goToNextSong, resetSong } from "./timeKeeperReducer";

describe("Time Keeper reducer", () => {
  it("should return the initial state", () => {
    expect(timeKeeperReducer(undefined, {})).toEqual(initialState);
  });

  it("should add time blocks to timer, 15/30/60 sec", () => {
    const blockToAdd = { music: "file", seconds: 15, mood: 'excited' };
    const result = timeKeeperReducer(undefined, addTimeBlocks(blockToAdd));
    expect(result.song[0]).toEqual(blockToAdd);
    expect(result.secondsLeft).toEqual(15);
    expect(result.totalLength).toEqual(15);
  });

  it("should add time blocks to timer, randomized", () => {
    // get 30 sec time block every time
    Math.random = jest.fn(() => 0.5);
    const blockToAdd = { seconds: 180, mood: 'relaxed' };
    const result = timeKeeperReducer(undefined, addTimeBlocks(blockToAdd));
    expect(result.song.length).toBe(6);
    expect(result.secondsLeft).toEqual(180);
    expect(result.totalLength).toEqual(180);
  });

  it("should toggle playing", () => {
    const result = timeKeeperReducer(undefined, toggleTimer());
    expect(result.isPlaying).toBe(true);
    const result2 = timeKeeperReducer(result, toggleTimer());
    expect(result2.isPlaying).toBe(false);
  });

  it("should toggle mute", () => {
    const result = timeKeeperReducer(undefined, toggleMute());
    expect(result.isMuted).toBe(true);
    const result2 = timeKeeperReducer(result, toggleMute());
    expect(result2.isMuted).toBe(false);
  });

  it("should decrement the time by 1 second", () => {
    const blockToAdd = { seconds: 60, mood: 'relaxed' };
    const init = timeKeeperReducer(undefined, addTimeBlocks(blockToAdd));
    const result = timeKeeperReducer(init, decrementOneSecond());
    expect(result.secondsLeft).toEqual(59);
  })
  
  it("should set milliseconds", () => {
    const result = timeKeeperReducer(undefined, setMillisecondsLeftInSecond(500));
    expect(result.millisecondsLeft).toBe(500);
  });

  it("should go to the next song", () => {
    const result = timeKeeperReducer(undefined, goToNextSong());
    expect(result.currSongIdx).toBe(1);
  });

  it("should go to the beginning if goToNextSong is envoked", () => {
    const firstBlock = { music: 'file', seconds: 15, mood: 'relaxed' };
    const secondBlock = { music: 'file', seconds: 30, mood: 'relaxed' };

    const addFirstBlock = timeKeeperReducer(undefined, addTimeBlocks(firstBlock));
    const addSecondBlock = timeKeeperReducer(addFirstBlock, addTimeBlocks(secondBlock));
    const nextSong1 = timeKeeperReducer(addSecondBlock, goToNextSong());
    expect(nextSong1.currSongIdx).toBe(1);
    const goToEnd = timeKeeperReducer(nextSong1, goToNextSong());
    expect(goToEnd.currSongIdx).toBe(0);
  });

  it("should reset the song", () => {
    const block = { music: 'file', seconds: 15, mood: 'relaxed' };

    const addFirstBlock = timeKeeperReducer(undefined, addTimeBlocks(block));
    const decremented = timeKeeperReducer(addFirstBlock, decrementOneSecond());
    expect(decremented.secondsLeft).toBe(14)
    const reset = timeKeeperReducer(decremented, resetSong());
    expect(reset.secondsLeft).toBe(15);
  });
});
