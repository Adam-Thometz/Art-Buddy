import { useSelector } from 'react-redux';

import Icon from '_components/icon/Icon';

import play from '_media/_general/play.png';

const Instructions = ({ setVisited }) => {
  const { currGame } = useSelector(state => state.general);
  const handleSetVisited = () => setVisited(true);
  return (
    <div className='Instructions'>
      <article>{currGame.description}</article>
      <Icon icon={play} text="PLAY" size='250px' onClick={handleSetVisited} />
    </div>
  );
};

export default Instructions;