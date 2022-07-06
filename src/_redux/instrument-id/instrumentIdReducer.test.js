import instrumentIdReducer, { INITIAL_STATE, defaultInstrument } from "./instrumentIdReducer";
import { selectChoice, generateAnswer, clearChoices, addInstrument, selectMelody } from "./insturmentIdActions";

import { setupChoices, setupInstrument } from '_testUtils/setup-functions/instrumentIdReducerTestSetup';

describe("What's That Instrument? reducer", () => {
  it('should return the initial state', () => {
    expect(instrumentIdReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle selecting a choice for level 1', () => {
    Math.random = jest.fn(() => 0.5)
    const result = instrumentIdReducer(undefined, selectChoice({
      id: 1,
      level: '1',
      choice: 'percussion'
    }));
    expect(result.choice1.id).toBe('xylophone');
    const result2 = instrumentIdReducer(undefined, selectChoice({
      id: 2,
      level: '1',
      choice: 'voice'
    }));
    expect(result2.choice2.id).toBe('tenor');
  });

  it('should handle selecting a choice for level 2 or above', () => {
    const result = setupChoices();
    expect(result.choice1.id).toBe('electricBass');
    expect(result.choice2.id).toBe('theremin');
  });

  it('should handle generating an answer', () => {
    const choices = setupChoices();
    const { choice1, choice2 } = choices;
    const result = instrumentIdReducer(choices, generateAnswer({ choice1, choice2 }));
    expect(result.answer.id).toBe(choice2.id);
  });
  
  it('should handle clearing choices', () => {
    const choices = setupChoices();
    const result = instrumentIdReducer(choices, clearChoices());
    expect(result.choice1).toBe(null);
    expect(result.choice2).toBe(null);
    expect(result.answer).toBe(null);
  });

  it('should handle adding a new instrument to a song', () => {
    const result = instrumentIdReducer(undefined, addInstrument(1));
    expect(result.song[1]).toEqual(defaultInstrument);
    expect(result.song[3]).toBe(null);
    const result2 = instrumentIdReducer(result, addInstrument(3));
    expect(result2.song[3]).toEqual(defaultInstrument);
  });

  it('should handle selecting an instrument', () => {
    const result = setupInstrument({ id: 0, isRhythm: false });
    expect(result.song[0].instrumentId).toBe('acousticGuitar');
    expect(result.song[0].isRhythm).toBeFalsy();
    const result2 = setupInstrument({ id: 1, isRhythm: true });
    expect(result2.song[1].instrumentId).toBe('drumSet');
    expect(result2.song[1].isRhythm).toBeTruthy();
  });
  
  it('should handle selecting a melody or rhythm', () => {
    const withInstrument = setupInstrument({ id: 0, isRhythm: false });
    const result = instrumentIdReducer(withInstrument, selectMelody({ id: 0, melodyId: 'sevenNationArmyMelody' }));
    expect(result.song[0].melodyId).toBe('sevenNationArmyMelody');
  });

  it('should handle setting melodyId to null if isRhythm changes', () => {
    const first = setupInstrument({ id: 0, isRhythm: false });
    const withMelody = instrumentIdReducer(first, selectMelody({ id: 0, melodyId: 'sevenNationArmyMelody' }));
    const second = setupInstrument({ id: 0, isRhtyhm: true, state: withMelody });
    expect(second.song[0].melodyId).toBeNull();
    const withRhythm = instrumentIdReducer(first, selectMelody({ id: 0, melodyId: 'regularRhythm' }));
    const third = setupInstrument({ id: 0, isRhythm: false, state: withRhythm });
    expect(third.song[0].melodyId).toBeNull();
  });
});