import { useDispatch } from "react-redux";
import { deleteFromRhythm } from "_redux/jump-into-rhythm/jumpIntoRhythmReducer";

import "./NoteBlock.css";

import { DELETE } from "_media/_general/general.assets";

const NoteBlock = ({ borderColor, note, id }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = () => dispatch(deleteFromRhythm(id));

  return (
    <div className="NoteBlock" style={{ borderColor }} data-testid="block">
      {note ? (
        <>
          <img
            src={DELETE}
            className="NoteBlock-delete"
            alt="Delete note"
            onClick={handleDeleteNote}
          />
          <img src={note.img} className="NoteBlock-note" alt="" />
        </>
      ) : null}
    </div>
  );
};

export default NoteBlock;
