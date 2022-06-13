import instrumentIdReducer from "../../_redux/reducers/instrumentIdReducer";
import { selectChoice, selectInstrument } from "../../_redux/actions/insturmentIdActions";

export function setupChoices() {
  Math.random = jest.fn();
  Math.random.mockReturnValueOnce(0.2).mockReturnValue(0.8);
  const result = instrumentIdReducer(undefined, selectChoice({
    id: 1,
    level: '2',
    choice: 'electronic'
  }));
  return result;
};

export function setupInstrument({ id, isRhythm, withMelody = undefined }) {
  const instrumentId = isRhythm ? 'drumSet' : 'acousticGuitar';
  const result = instrumentIdReducer(withMelody, selectInstrument({
    id,
    instrumentId
  }));
  return result;
};