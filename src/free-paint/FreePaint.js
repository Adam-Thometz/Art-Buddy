import React from 'react';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Help from '_components/help/Help';

const FreePaint = () => {
  return (
    <div className='FreePaint'>
      <WindowNavbar page='FREE PAINT' cornerIcon={<Help />} />
      <header>
        HULLO IM FREE PAINT. LETS MAKE SOME LETTERS, NUMBERS, SHAPES, WHATEVER.
      </header>
      <hr />
    </div>
  );
};

export default FreePaint;