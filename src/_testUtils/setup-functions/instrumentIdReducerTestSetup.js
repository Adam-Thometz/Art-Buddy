import idListeningSkillsTestReducer from "_redux/instrument-id/listening-skills/listeningSkillsTestReducer";
import idSongMakerReducer from "_redux/instrument-id/song-maker/songMakerReducer";
import { selectChoice } from "_redux/instrument-id/listening-skills/listeningSkillsTestActions";
import { selectInstrument } from "_redux/instrument-id/song-maker/songMakerActions";

export function setupChoices() {
  Math.random = jest.fn();
  Math.random.mockReturnValueOnce(0.2).mockReturnValue(0.8);
  const result = idListeningSkillsTestReducer(undefined, selectChoice({ id: 1, level: "2", choice: "electronic" }));
  return result;
}

export function setupInstrument({ id, isRhythm, withMelody = undefined }) {
  const instrumentId = isRhythm ? "drumSet" : "acousticGuitar";
  const result = idSongMakerReducer(withMelody, selectInstrument({ id, instrumentId }));
  return result;
}
