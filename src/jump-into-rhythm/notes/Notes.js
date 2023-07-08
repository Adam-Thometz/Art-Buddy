import { useSelector, useDispatch } from "react-redux";
import { setMeasures } from "_redux/jump-into-rhythm/jumpIntoRhythmReducer";

import "./Notes.css";

import NoteBlock from "./note-block/NoteBlock";

import { TREBLE_CLEF } from "_media/jump-into-rhythm/jumpIntoRhythm.assets";
import { ADD, MINUS } from "_media/_general/general.assets";
import colors from "_data/_utils/colorOrder";

const Notes = () => {
  const { rhythm } = useSelector((state) => state.jumpIntoRhythm);
  const dispatch = useDispatch();

  const addMeasure = () => dispatch(setMeasures(4));
  const removeMeasure = () => dispatch(setMeasures(-4));

  const colorOrder = [2, 1, 0, 4];

  return (
    <div className="Notes">
      {/* Measure 1 */}
      <div className="Notes-measure">
        <img src={TREBLE_CLEF} alt="Treble clef" />
        <section className="Notes-beats">
          {rhythm.slice(0, 4).map((note, i) => (
            <NoteBlock
              key={`measure${i}`}
              borderColor={colors[colorOrder[i]]}
              note={note}
              id={i}
            />
          ))}
        </section>
      </div>
      {/* Measure 2 */}
      <div className="Notes-measure">
        <img
          src={rhythm.length >= 8 ? MINUS : ADD}
          className="Notes-toggle"
          alt="Add measure"
          onClick={rhythm.length === 4 ? addMeasure : removeMeasure}
        />
        <section className="Notes-beats">
          {rhythm.length >= 8
            ? rhythm
                .slice(4, 8)
                .map((note, i) => (
                  <NoteBlock
                    key={`measure${i + 4}`}
                    borderColor={colors[colorOrder[i]]}
                    note={note}
                    id={i + 4}
                  />
                ))
            : null}
        </section>
      </div>
      {/* Measure 3 */}
      <div className="Notes-measure">
        {rhythm.length >= 8 ? (
          <img
            src={rhythm.length >= 12 ? MINUS : ADD}
            className="Notes-toggle"
            alt="Add measure"
            onClick={rhythm.length === 8 ? addMeasure : removeMeasure}
          />
        ) : null}
        <section className="Notes-beats">
          {rhythm.length >= 12
            ? rhythm
                .slice(8, 12)
                .map((note, i) => (
                  <NoteBlock
                    key={`measure${i + 8}`}
                    borderColor={colors[colorOrder[i]]}
                    note={note}
                    id={i + 8}
                  />
                ))
            : null}
        </section>
      </div>
      {/* Measure 4 */}
      <div className="Notes-measure">
        {rhythm.length >= 12 ? (
          <img
            src={rhythm.length >= 16 ? MINUS : ADD}
            className="Notes-toggle"
            alt="Add measure"
            onClick={rhythm.length === 12 ? addMeasure : removeMeasure}
          />
        ) : null}
        <section className="Notes-beats">
          {rhythm.length >= 16
            ? rhythm
                .slice(12)
                .map((note, i) => (
                  <NoteBlock
                    key={`measure${i + 12}`}
                    borderColor={colors[colorOrder[i]]}
                    note={note}
                    id={i + 12}
                  />
                ))
            : null}
        </section>
      </div>
    </div>
  );
};

export default Notes;
