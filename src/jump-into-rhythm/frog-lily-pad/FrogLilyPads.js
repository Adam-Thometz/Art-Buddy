import React from 'react';

import { useSelector } from 'react-redux';

import './FrogLilyPads.css';

import Frog from './frog/Frog';
import LilyPadDisplay from './lily-pad-display/LilyPadDisplay';

import { blue, green, red, yellow } from '_media/jump-into-rhythm/frogs/frogs';

const FrogLilyPad = () => {
  const { rhythm } = useSelector(state => state.jumpIntoRhythm);
  return (
    <section className='FrogLilyPads'>
      <div className='FrogLilyPads-section'>
        <Frog frog={blue} />
        <LilyPadDisplay measure={rhythm.slice(0, 4)} />
      </div>
      {rhythm.length >= 8 ? <div className='FrogLilyPads-section'>
        <Frog frog={green} />
        <LilyPadDisplay measure={rhythm.slice(4, 8)} />
      </div> : null}
      {rhythm.length >= 12 ? <div className='FrogLilyPads-section'>
        <Frog frog={red} />
        <LilyPadDisplay measure={rhythm.slice(8, 12)} />
      </div> : null}
      {rhythm.length >= 16 ? <div className='FrogLilyPads-section'>
        <Frog frog={yellow} />
        <LilyPadDisplay measure={rhythm.slice(12, 16)} />
      </div> : null}
    </section>
  )
}

export default FrogLilyPad