import React from 'react';

import './App.css';

import Navbar from './_navbar/Navbar';
import ArtBuddyRoutes from './_routes/ArtBuddyRoutes';

import leftLines from './_background/LL.png';
import rightLines from './_background/RL.png';

const App = () => {
  return (
    <div className="App">
      <div className='App-lines'>
        <img src={leftLines} alt='' />
        <img className='right' src={rightLines} alt='' />
      </div>
      <Navbar />
      <ArtBuddyRoutes />
    </div>
  );
};

export default App;