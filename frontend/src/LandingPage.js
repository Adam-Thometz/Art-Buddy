import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>Welcome to My App! Pick an activity to begin</h1>
      <ul>
        <li><Link to="/word-to-music">Word to Music Decoder</Link></li>
        <li><Link to="/sequencer">Sequence Maker</Link></li>
        <li><Link to="/freeze-dance">Freeze Dance</Link></li>
      </ul>
    </div>
  );
};

export default LandingPage;