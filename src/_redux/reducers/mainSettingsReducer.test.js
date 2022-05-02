import mainSettingsReducer, { INITIAL_STATE } from "./mainSettingsReducer";
import { changeMenuGames } from "../actions";

describe('Main Menu & Settings Reducer', () => {
  it('should return the initial state', () => {
    expect(mainSettingsReducer(undefined, {})).toEqual(INITIAL_STATE);
  })

  it('should handle changing menu category', () => {
    expect(mainSettingsReducer(undefined, changeMenuGames('tools'))).toEqual({
      ...INITIAL_STATE,
      menu: 'tools'
    })
  })
})