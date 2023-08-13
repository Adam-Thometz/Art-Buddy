import { useDispatch } from "react-redux";
import { deleteFromRhythm } from "store/jump-into-rhythm/jumpIntoRhythmReducer";

import "./NoteBlock.css";

import { CLOSE } from "assets/_general/general.assets";

const NoteBlock = ({ borderColor, note, id }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = () => dispatch(deleteFromRhythm(id));

  return (
    <div className="NoteBlock" style={{ borderColor }} data-testid="block">
      {note ? (
        <>
          <img
            src={CLOSE}
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
