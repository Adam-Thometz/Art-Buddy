import { useContext, useEffect } from "react";
import useVisited from "hooks/visited/useVisited";
import { PopupContext } from "context/PopupContext";

import { useDispatch, useSelector } from "react-redux";
import { changeCurrGame } from "store/_general/generalReducer";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Instructions from "components/instructions/Instructions";
import Valence from "./valence/Valence";
import Energy from "./energy/Energy";

import { moodMeter } from "data/_activities/activityList";
import Result from "./result/Result";

const MoodMeter = () => {
  const [hasVisited, setHasVisited] = useVisited(moodMeter.lsKey);
  const { valence, energy } = useSelector((state) => state.moodMeter);
  const { currGame } = useSelector((state) => state.general);
  const { setCurrPopup } = useContext(PopupContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(moodMeter));
    return () => {
      dispatch(changeCurrGame({}));
    };
  }, [dispatch]);

  useEffect(() => {
    if (valence !== null && energy !== null) {
      setCurrPopup({
        title: "YOUR MOOD IS...",
        popup: <Result />,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valence, energy]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? (
        <Instructions setVisited={setHasVisited} />
      ) : (
        <>
          <Valence />
          <Energy />
        </>
      )}
    </>
  );
};

export default MoodMeter;
