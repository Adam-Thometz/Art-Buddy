import React from 'react';

import { useSelector } from 'react-redux';

import './Result.css';

import Face from 'mood-meter/valence/face/Face';
import Battery from 'mood-meter/energy/battery/Battery';

import faces from '_data/mood-meter/faces';
import batteries from '_data/mood-meter/batteries';
import moods from '_data/mood-meter/moods';
import Button from '_components/button/Button';

const Result = () => {
  const { valence, energy } = useSelector(state => state.moodMeter);

  const face = faces.find(face => face.id === valence);
  const valenceIcon = <Face key={face.id} src={face.src} id={face.id} isSelected={true} />;
  
  const battery = batteries.find(battery => battery.id === energy);
  const energyIcon = <Battery key={battery.id} width={battery.width} id={battery.id} filter={battery.filter} />;
  
  const mood = moods[valence][energy];
  
  return (
    <div className='Result'>
      <div className='Result-icons'>
        {valenceIcon}
        {energyIcon}
      </div>
      <p className='Result-text'>{mood}</p>
      <Button colorId={2}>Listen To Song</Button>
    </div>
  );
};

export default Result;