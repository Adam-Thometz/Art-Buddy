import React from 'react';
import useVisited from '_hooks/useVisited';

import { useSelector } from 'react-redux';

import Icon from '_components/icon/Icon';

import play from '_media/_general/play.png';

const Instructions = () => {
  const { currGame } = useSelector(state => state.general);
  const [, setHasVisited] = useVisited(currGame.lsKey);
  const handleSetVisited = () => setHasVisited(true);
  return (
    <div className='Instructions'>
      <article>{currGame.description}</article>
      <Icon icon={play} text="PLAY" size='250px' onClick={handleSetVisited} />
    </div>
  );
};

export default Instructions;