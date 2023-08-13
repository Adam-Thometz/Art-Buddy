import { useEffect } from "react";
import useVisited from "hooks/visited/useVisited";

import { useDispatch, useSelector } from "react-redux";
import { clearGame, loadStudents } from "store/score-keeper/scoreKeeperReducer";
import { changeCurrGame } from "store/_general/generalReducer";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Instructions from "components/instructions/Instructions";
import Students from "./students/Students";

import { scoreKeeper } from "data/_activities/activityList";

const ScoreKeeper = () => {
  const [hasVisited, setHasVisited] = useVisited(scoreKeeper.lsKey);
  const { currGame } = useSelector((state) => state.general);
  const { roster } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(scoreKeeper));
    dispatch(loadStudents(roster.students));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
    };
  }, [dispatch, roster]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? <Instructions setVisited={setHasVisited} /> : <Students />}
    </>
  );
};

export default ScoreKeeper;
