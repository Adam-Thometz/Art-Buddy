import React from "react";
import { useSelector } from "react-redux";
// import SoundDetection from 'sound-detection';

const Music = () => {
  const isPlaying = useSelector(state => state.freezeDance.isPlaying)
  return (
    <div className="Music">
      <h1>Music playing? {isPlaying ? "YES" : "NO"}</h1>
    </div>
  );
};

export default Music;