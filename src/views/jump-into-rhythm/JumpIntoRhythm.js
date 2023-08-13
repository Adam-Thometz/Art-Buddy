import { useContext, useEffect } from "react";
import useVisited from "hooks/visited/useVisited";
import { PlayContext } from "context/PlayContext";

import { useSelector, useDispatch } from "react-redux";
import { clearGame } from "store/jump-into-rhythm/jumpIntoRhythmReducer";
import { changeCurrGame } from "store/_general/generalReducer";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Instructions from "components/instructions/Instructions";
import Notes from "./notes/Notes";
import NoteOptions from "./note-options/NoteOptions";
import FrogLilyPad from "./frog-lily-pad/FrogLilyPads";

import makeFrog from "lib/jump-into-rhythm/makeFrog";
import { jumpIntoRhythm } from "data/_activities/activityList";
import { Transport } from "tone";

const JumpIntoRhythm = () => {
  const [hasVisited, setHasVisited] = useVisited(jumpIntoRhythm.lsKey);
  const { currGame } = useSelector((state) => state.general);
  const { isDisplayingLilyPads } = useSelector((state) => state.jumpIntoRhythm);
  const { setPlayFn } = useContext(PlayContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(jumpIntoRhythm));
    setPlayFn(() => makeFrog().hop);
    Transport.bpm.value = 90;
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
      Transport.stop();
      Transport.bpm.value = 120;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? (
        <Instructions setVisited={setHasVisited} />
      ) : (
        <>
          {isDisplayingLilyPads ? <FrogLilyPad /> : <Notes />}
          <NoteOptions />
        </>
      )}
    </>
  );
};

export default JumpIntoRhythm;
