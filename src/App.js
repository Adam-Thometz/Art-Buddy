import React from 'react';

import './App.css';

import Navbar from './navbar/Navbar';
import ArtBuddyRoutes from './_routes/ArtBuddyRoutes';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ArtBuddyRoutes />
    </div>
  );
};

export default App;