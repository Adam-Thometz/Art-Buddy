import { useNavigate } from 'react-router-dom';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Icon from '_components/icon/Icon';
import Options from '_components/option/Options';

import { playIcon, learnIcon } from "_media/instrument-id/_icons/iconImports";
import { colorTheoryUrls } from '_routes/routeUrls';

const ColorTheory = () => {
  const navigate = useNavigate();

  const goToLearn = () => navigate(colorTheoryUrls.learn);
  const goToPlay = () => navigate(colorTheoryUrls.play);
  
  return (
    <main className='ColorTheory'>
      <WindowNavbar page="COLOR THEORY" />
      <p className="ColorTheory-instructions">Let’s learn about Color Theory! Click LEARN to reivew your color knowledge. Click PLAY to test your skills.</p>
      <Options width='50%'>
        <Icon largeFont icon={learnIcon} text="LEARN" onClick={goToLearn} />
        <Icon largeFont icon={playIcon} text="PLAY" onClick={goToPlay} />
      </Options>
    </main>
  );
};

export default ColorTheory;