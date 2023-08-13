import { useEffect } from "react";
import useVisited from "hooks/visited/useVisited";

import { useSelector, useDispatch } from "react-redux";
import { changeCurrGame } from "store/_general/generalReducer";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Instructions from "components/instructions/Instructions";

import { noiseMeter } from "data/_activities/activityList";
import Meter from "./meter/Meter";
import Switch from "./switch/Switch";

const NoiseMeter = () => {
  const [hasVisited, setHasVisited] = useVisited(noiseMeter.lsKey);
  const { currGame } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(noiseMeter));
    return () => dispatch(changeCurrGame({}));
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? (
        <Instructions setVisited={setHasVisited} />
      ) : (
        <>
          <Meter />
          <Switch />
        </>
      )}
    </>
  )
}

export default NoiseMeter;
