import { useDispatch } from "react-redux";
import { deleteFromRhythm } from "_redux/jump-into-rhythm/jumpIntoRhythmActions";

import "./NoteBlock.css";

import deleteBtn from "_media/_general/close.png";

const NoteBlock = ({ borderColor, note, id }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = () => dispatch(deleteFromRhythm(id));

  return (
    <div className="NoteBlock" style={{ borderColor }} data-testid="block">
      {note ? (
        <>
          <img
            src={deleteBtn}
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
