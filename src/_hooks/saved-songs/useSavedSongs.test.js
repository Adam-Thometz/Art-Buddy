import useSavedSongs from "./useSavedSongs";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useSavedSongs hook", () => {
  it("returns an empty map if no songs are saved", () => {
    const { result } = renderHook(() => useSavedSongs());
    expect(result.current[0]).toEqual(new Map());
  });

  it("updates the saved songs list", () => {
    const newSong1 = new Map([
      [
        "sample song",
        [
          {
            instrumentId: "flute",
            isRhythm: false,
            melodyId: "exampleSong",
          },
          {
            instrumentId: "conga",
            isRhythm: true,
            melodyId: "exampleBeat",
          },
        ],
      ],
    ]);
    const { result } = renderHook(() => useSavedSongs());
    act(() => {
      const setState = result.current[1];
      setState(newSong1);
    });
    expect(result.current[0]).toEqual(newSong1);
  });
});
