import { useRef, useEffect } from "react";

import { useSelector } from "react-redux";

import "./TimeBlock.css";

import animations from "_data/time-keeper/possibleAnimations";

const TimeBlock = ({ seconds, mood, i }) => {
  const { totalLength, currSongIdx, isPlaying } = useSelector((state) => state.timeKeeper);
  const blockRef = useRef(null);

  useEffect(() => {
    if (i === currSongIdx && isPlaying) {
      blockRef.current.animate(animations[mood], {
        duration: 1000,
        iterations: Infinity
      });
    } else {
      const animations = blockRef.current.getAnimations();
      if (animations.length) animations.forEach(a => a.cancel());

      // if (isPlaying) {
      //   blockRef.current.animate([
      //     { transform: "scale(1, 1.2)", easing: "ease-out" },
      //     { transform: "scale(1)", easing: "ease-out" },
      //   ], {
      //     duration: 1000,
      //     iterations: 1
      //   })
      // }
    }
  }, [isPlaying, currSongIdx, i, mood])

  const width = `${(seconds / totalLength) * 100}%`;

  return (
    <div className={`TimeBlock ${mood}`} style={{ width }} ref={blockRef}>
      {parseInt(width) < 5 ? null : seconds === 60 ? "1 MIN" : `${seconds} SEC`}
    </div>
  );
};

export default TimeBlock;
