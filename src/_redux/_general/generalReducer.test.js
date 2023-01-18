import generalReducer, { INITIAL_STATE } from "./generalReducer";
import { changeCurrGame, changeMenu, setCurrTimer } from "./generalActions";

import { wordToMusic } from "_data/_activities/activityList";

describe("General Reducer", () => {
  it("should return the initial state", () => {
    expect(generalReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle changing menu category", () => {
    const init = generalReducer(undefined, {});
    expect(init.menu).toBe("games");

    const result2 = generalReducer(init, changeMenu("tools"));
    expect(result2.menu).toBe("tools");
  });

  it("should handle setting current game info", () => {
    const init = generalReducer(undefined, {});
    expect(init.currGame).toEqual({});

    const result = generalReducer(init, changeCurrGame(wordToMusic));
    expect(result.currGame).toEqual(wordToMusic);
  });

  it("should set a timer id", () => {
    const result = generalReducer(undefined, setCurrTimer(457457));
    expect(result.currTimer).toBe(457457);
  });
});
