import React from 'react';

import { useSelector } from 'react-redux';

import './FrogLilyPads.css';

import Frog from './frog/Frog';
import LilyPadDisplay from './lily-pad-display/LilyPadDisplay';

import { blue, green, red, yellow } from '_media/jump-into-rhythm/frogs/frogs';
import { Time } from 'tone';

const FrogLilyPad = () => {
  const { rhythm } = useSelector(state => state.jumpIntoRhythm);
  return (
    <section className='FrogLilyPads'>
      <div className='FrogLilyPads-section'>
        <Frog frog={blue} measure={rhythm.slice(0, 4)} />
        <LilyPadDisplay measure={rhythm.slice(0, 4)} id={1} />
      </div>
      {rhythm.length >= 8 ? <div className='FrogLilyPads-section'>
        <Frog frog={green} measure={rhythm.slice(4, 8)} delay={Time('1m').toSeconds()} />
        <LilyPadDisplay measure={rhythm.slice(4, 8)} id={2} />
      </div> : null}
      {rhythm.length >= 12 ? <div className='FrogLilyPads-section'>
        <Frog frog={red} measure={rhythm.slice(8, 12)} delay={Time('2m').toSeconds()} />
        <LilyPadDisplay measure={rhythm.slice(8, 12)} id={3} />
      </div> : null}
      {rhythm.length === 16 ? <div className='FrogLilyPads-section'>
        <Frog frog={yellow} measure={rhythm.slice(12, 16)} delay={Time('3m').toSeconds()} />
        <LilyPadDisplay measure={rhythm.slice(12, 16)} id={4} />
      </div> : null}
    </section>
  );
};

export default FrogLilyPad