import React from 'react';

import Icon from '_components/icon/Icon';
import WindowNavbar from '_components/window-nav/WindowNavbar';

import colorTheoryIcon from '_media/menu/activity-icons/color-theory.png';

const Play = () => {
  return (<>
    <WindowNavbar page="COLOR THEORY: PLAY" />
    <main className='Play'>
      <header className='Play-icon'>
        <Icon largeFont icon={colorTheoryIcon} text="Color Theory" />
      </header>
    </main>
  </>);
};

export default Play;