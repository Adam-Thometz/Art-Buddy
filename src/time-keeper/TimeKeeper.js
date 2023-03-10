import { useEffect } from "react";
import useVisited from "_hooks/visited/useVisited";

import { useSelector, useDispatch } from "react-redux";
import { changeCurrGame } from "_redux/_general/generalActions";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Instructions from "_components/instructions/Instructions";
import TimeLeft from "./time-left/TimeLeft";

import { timeKeeper } from "_data/_activities/activityList";
import Interface from "./interface/Interface";

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
          <Interface />
        </>
      )}
    </>
  );
};

export default TimeKeeper;
