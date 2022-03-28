import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>Welcome to Art Buddy!</h1>
      <p>Art Buddy is a collection of tools that you can use in your special education classroom to incorporate the arts while focusing on your student's goals.</p>
      <p>Pick an activity to begin.</p>
      <ul>
        <li><Link to="/word-to-music">Word to Music Decoder</Link></li>
        <li><Link to="/sequencer">Sequence Maker</Link></li>
        <li><Link to="/freeze-dance">Freeze Dance</Link></li>
      </ul>
    </div>
  );
};

export default LandingPage;