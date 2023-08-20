import listeningSkillsTestReducer, { selectChoice } from "store/instrument-id/listening-skills/listeningSkillsTestReducer";
import songMakerReducer, { selectInstrument } from "store/instrument-id/song-maker/songMakerReducer";

export function setupChoices() {
  Math.random = jest.fn();
  Math.random.mockReturnValueOnce(0.2).mockReturnValue(0.8);
  const result = listeningSkillsTestReducer(undefined, selectChoice({ id: 1, level: "2", choice: "electronic" }));
  return result;
}

export function setupInstrument({ id, isRhythm, withMelody = undefined }) {
  const instrumentId = isRhythm ? "drumSet" : "acousticGuitar";
  const result = songMakerReducer(withMelody, selectInstrument({ id, instrumentId }));
  return result;
}
