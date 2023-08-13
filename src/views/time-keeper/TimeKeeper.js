import { useEffect } from "react";
import useVisited from "hooks/visited/useVisited";

import { useSelector, useDispatch } from "react-redux";
import { changeCurrGame } from "store/_general/generalReducer";
import { clearSong } from "store/time-keeper/timeKeeperReducer";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Instructions from "components/instructions/Instructions";
import TimeLeft from "./time/time-left/TimeLeft";
import TimeBar from "./time/time-bar/TimeBar";
import Interface from "./interface/Interface";

import { timeKeeper } from "data/_activities/activityList";

const TimeKeeper = () => {
  const [hasVisited, setHasVisited] = useVisited(timeKeeper.lsKey);
  const { currGame } = useSelector((state) => state.general);
  const { currSongIdx } = useSelector((state) => state.timeKeeper);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(timeKeeper));
    return () => dispatch(changeCurrGame({}));
  }, [dispatch]);

  const handleClear = () => {
    if (currSongIdx === 0) {
      const audio = document.querySelector(".TimeKeeperNav-audio");
      if (audio) audio.currentTime = 0;
    }
    dispatch(clearSong());
  }

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
          <span onClick={handleClear}>clear song</span>
        </>
      )}
    </>
  );
};

export default TimeKeeper;
