import { useEffect } from 'react';
import useVisited from '_hooks/visited/useVisited';

import { useSelector, useDispatch } from 'react-redux';
import { changeCurrGame } from '_redux/_general/generalActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';

import { timeKeeper } from '_data/_activities/activityList';

const TimeKeeper = () => {
  const [hasVisited, setHasVisited] = useVisited(timeKeeper.lsKey);
  const { currGame } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeCurrGame(timeKeeper));
    return () => dispatch(changeCurrGame({}));
  });

  return (<>
    <WindowNavbar page={currGame.name} />
    {!hasVisited ? <Instructions setVisited={setHasVisited} /> : <h2>00:00:00</h2>}
  </>);
};

export default TimeKeeper;