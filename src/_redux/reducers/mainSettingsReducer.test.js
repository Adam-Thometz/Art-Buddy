import mainSettingsReducer, { INITIAL_STATE } from "./mainSettingsReducer";
import { changeMenuGames } from "../actions/mainSettingsActions";

describe('Main Menu & Settings Reducer', () => {
  it('should return the initial state', () => {
    expect(mainSettingsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle changing menu category', () => {
    const result = mainSettingsReducer(undefined, changeMenuGames('tools'));
    expect(result).toEqual({
      ...INITIAL_STATE,
      menu: 'tools'
    });
    const result2 = mainSettingsReducer(result, changeMenuGames('games'));
    expect(result2).toEqual({
      ...INITIAL_STATE,
      menu: 'games'
    });
  });
});