import { useEffect } from "react";
import useVisited from "_hooks/visited/useVisited";

import { useSelector, useDispatch } from "react-redux";
import { changeCurrGame } from "_redux/_general/generalReducer";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Instructions from "_components/instructions/Instructions";
import TimeLeft from "./time/time-left/TimeLeft";
import TimeBar from "./time/time-bar/TimeBar";
import Interface from "./interface/Interface";

import { timeKeeper } from "_data/_activities/activityList";

const TimeKeeper = () => {
  const [hasVisited, setHasVisited] = useVisited(timeKeeper.lsKey);
  const { currGame } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(timeKeeper));
    return () => dispatch(changeCurrGame({}));
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? (
        <Instructions setVisited={setHasVisited} />
      ) : (
        <>
          <TimeLeft />
          <TimeBar />
          <Interface />
        </>
      )}
    </>
  );
};

export default TimeKeeper;
