import React from 'react';
import Icon from '_components/icon/Icon';

import play from '_media/general-icons/play.png';

const Instructions = ({ game, setHasVisited }) => {
  const handleSetVisited = () => setHasVisited(true);
  return (
    <div className='Instructions'>
      <article>{game.description}</article>
      <Icon icon={play} text="PLAY" size='250px' onClick={handleSetVisited} />
    </div>
  );
};

export default Instructions;