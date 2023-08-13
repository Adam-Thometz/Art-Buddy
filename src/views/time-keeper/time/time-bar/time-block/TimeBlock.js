import { useRef, useEffect } from "react";

import { useSelector } from "react-redux";

import "./TimeBlock.css";

import animations from "data/time-keeper/possibleAnimations";

const BEAT_LENGTH = 469*4;

const TimeBlock = ({ seconds, mood, i }) => {
  const { totalLength, currSongIdx, isPlaying } = useSelector((state) => state.timeKeeper);
  const blockRef = useRef(null);

  useEffect(() => {
    if (i === currSongIdx && isPlaying) {
      blockRef.current.animate(animations[mood], {
        duration: BEAT_LENGTH,
        iterations: Infinity
      });
    } else if (i !== currSongIdx || !isPlaying) {
      const animations = blockRef.current.getAnimations();
      if (animations.length) animations.forEach(a => a.cancel());
    }
  }, [isPlaying, currSongIdx, i, mood]);

  const width = `${(seconds / totalLength) * 100}%`;

  return (
    <div className={`TimeBlock ${mood}`} style={{ width }} ref={blockRef}>
      {parseInt(width) < 5
        ? null
        : seconds === 60 ? "1 MIN" : `${seconds} SEC`
      }
    </div>
  );
};

export default TimeBlock;
