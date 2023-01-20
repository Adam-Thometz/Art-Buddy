import { useSelector, useDispatch } from "react-redux";
import {
  addInstrument,
  removeInstrument,
  selectInstrument,
  selectMelody,
} from "_redux/instrument-id/song-maker/songMakerActions";

import "./InstrumentDisplay.css";

import AddIcon from "_components/icon/add-icon/AddIcon";
import Dropdown from "_components/dropdown/Dropdown";

import {
  instrumentOptions,
  melodyOptions,
  rhythmOptions,
} from "./dropdownOptions";

const InstrumentDisplay = () => {
  const { song } = useSelector((state) => state.songMaker);
  const dispatch = useDispatch();

  const handleAddInstrument = (e) => {
    const id = +e.currentTarget.id;
    dispatch(addInstrument(id));
  };

  const handleRemoveInstrument = (e) => {
    const id = +e.currentTarget.id;
    dispatch(removeInstrument(id));
  };

  const handleSelectInstrument = (e) => {
    const id = +e.currentTarget.id;
    const instrumentId = e.target.id;
    dispatch(selectInstrument({ id, instrumentId }));
  };

  const handleSelectMelody = (e) => {
    const id = +e.currentTarget.id;
    const melodyId = e.target.id;
    dispatch(selectMelody({ id, melodyId }));
  };

  return (
    <div className="InstrumentDisplay">
      {song.map((instrument, i) => {
        if (!instrument) {
          return (
            <AddIcon
              key={i}
              text="ADD INSTRUMENT"
              size="69px"
              id={i}
              onClick={handleAddInstrument}
            />
          );
        } else {
          const instrumentDropdown = (
            <Dropdown
              key={`instrument${i}`}
              id={i}
              labelText="INSTRUMENT"
              options={instrumentOptions}
              onClick={handleSelectInstrument}
            />
          );
          const melodyDropdown = !instrument.instrumentId ? null : (
            <Dropdown
              key={`melody${i}`}
              id={i}
              labelText={instrument.isRhythm ? "RHYTHM" : "MELODY"}
              options={instrument.isRhythm ? rhythmOptions : melodyOptions}
              onClick={handleSelectMelody}
            />
          );
          return (
            <div key={i} className="InstrumentDisplay-options">
              {instrumentDropdown}
              {melodyDropdown}
              <span
                className="InstrumentDisplay-remove"
                id={i}
                onClick={handleRemoveInstrument}
              >
                remove
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default InstrumentDisplay;
