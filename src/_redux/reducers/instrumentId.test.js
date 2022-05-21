import instrumentIdReducer, { INITIAL_STATE } from "./instrumentIdReducer";
import { selectChoice, generateAnswer, clearChoices, addInstrument, selectInstrument, selectMelody } from "../actions/insturmentIdActions";

describe("What's That Instrument? reducer", () => {
  it('should return the initial state', () => {
    expect(instrumentIdReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle selecting a choice', () => {
    
  })
});