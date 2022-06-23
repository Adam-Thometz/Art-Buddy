import mainSettingsReducer, { INITIAL_STATE } from "./mainSettingsReducer";
import { changeMenuGames, setRoster, setVolume, toggleColorBlind, toggleTextToSpeech } from "../actions/mainSettingsActions";

describe('Main Menu & Settings Reducer', () => {
  it('should return the initial state', () => {
    expect(mainSettingsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle changing menu category', () => {
    const init = mainSettingsReducer(undefined, {});
    expect(init.menu).toBe('games');

    const result2 = mainSettingsReducer(init, changeMenuGames('tools'));
    expect(result2.menu).toBe('tools');
  });

  it('should handle changing the volume', () => {
    const init = mainSettingsReducer(undefined, {});
    expect(init.volume).toBe(0);

    const result = mainSettingsReducer(init, setVolume(-12));
    expect(result.volume).toBe(-12);
  });

  it('should handle toggling text-to-speech feature', () => {
    const init = mainSettingsReducer(undefined, {});
    expect(init.textToSpeech).toBeFalsy();

    const result = mainSettingsReducer(undefined, toggleTextToSpeech());
    expect(result.textToSpeech).toBeTruthy();
  });
  
  it('should handle toggling color blind feature', () => {
    const init = mainSettingsReducer(undefined, {});
    expect(init.colorBlind).toBeFalsy();

    const result = mainSettingsReducer(init, toggleColorBlind());
    expect(result.colorBlind).toBeTruthy();
  });

  it('should handle updating the global roster', () => {
    const init = mainSettingsReducer(undefined, {});
    expect(init.roster).toEqual({});

    const sampleRoster = { name: 'Demo Class', students: ['Hello', 'Goodbye'] }
    const result = mainSettingsReducer(init, setRoster(sampleRoster));
    expect(result.roster).toEqual(sampleRoster);
  });
});