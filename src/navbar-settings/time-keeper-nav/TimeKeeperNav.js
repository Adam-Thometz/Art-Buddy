import React, { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

const TimeKeeperNav = () => {
  const { song, secondsLeft, isPlaying } = useSelector(state => state.timeKeeper);
  const audioRef = useRef(null);

  useEffect(() => {
    isPlaying && song.length ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying, song])

  return (
    <section className='TimeKeeperNav'>
      <audio src={song[0].music} ref={audioRef} />

    </section>
  );
}

export default TimeKeeperNav;
