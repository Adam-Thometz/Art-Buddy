import { useEffect } from "react";
import useVisited from "_hooks/visited/useVisited";

import { useSelector, useDispatch } from "react-redux";
import { changeCurrGame } from "_redux/_general/generalReducer";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Instructions from "_components/instructions/Instructions";

import { noiseMeter } from "_data/_activities/activityList";

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
          <h1>Welcome to the Noise Meter!</h1>
        </>
      )}
    </>
  )
}

export default NoiseMeter;
