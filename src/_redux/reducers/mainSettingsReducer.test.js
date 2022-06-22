import mainSettingsReducer, { INITIAL_STATE } from "./mainSettingsReducer";
import { changeMenuGames, setRoster, setVolume, toggleColorBlind, toggleTextToSpeech } from "../actions/mainSettingsActions";

describe('Main Menu & Settings Reducer', () => {
  it('should return the initial state', () => {
    expect(mainSettingsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle changing menu category', () => {
    const result = mainSettingsReducer(undefined, changeMenuGames('tools'));
    expect(result.menu).toBe('tools');

    const result2 = mainSettingsReducer(result, changeMenuGames('games'));
    expect(result2.menu).toBe('games');
  });

  it('should handle changing the volume', () => {
    const init = mainSettingsReducer(undefined, {});
    expect(init.volume).toBe('medium');

    const result = mainSettingsReducer(init, setVolume('low'));
    expect(result.volume).toBe('low');
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