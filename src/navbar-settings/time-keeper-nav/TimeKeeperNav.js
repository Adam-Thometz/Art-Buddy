import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { decrementOneSecond, setMillisecondsLeftInSecond } from "_redux/time-keeper/timeKeeperReducer";
import { setCurrTimer } from "_redux/_general/generalReducer";

import createDisplayTime from '_utils/time-keeper/createDisplayTime';

const TimeKeeperNav = () => {
  const { song, secondsLeft, isPlaying, millisecondsLeft } = useSelector(state => state.timeKeeper);
  const [start, setStart] = useState(null);
  const { timer } = useSelector((state) => state.general);
  const audioRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const onTimeKeeperPage = location.pathname === '/time-keeper';

  useEffect(() => {
    if (song.length) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, song]);

  useEffect(() => {
    if (isPlaying && !timer) {
      setStart(new Date());
      if (!timer && secondsLeft) {
        const timeOut = setTimeout(() => {
          dispatch(decrementOneSecond());
          if (millisecondsLeft) dispatch(setMillisecondsLeftInSecond(0));
          clearTimer(timeOut);
        }, millisecondsLeft ? millisecondsLeft+3 : 1000);
        dispatch(setCurrTimer(timeOut));
      }
      if (!secondsLeft) {
        clearTimer(timer);
      }
    } else if (!isPlaying && start) {
      clearTimer(timer);
      const msLeft = 1000 - (new Date() - start);
      dispatch(setMillisecondsLeftInSecond(msLeft));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, secondsLeft, timer]);

  const clearTimer = timer => {
    clearTimeout(timer);
    dispatch(setCurrTimer(null));
  }

  const displayTime = song.length ? createDisplayTime(secondsLeft) : null;
  const currSong = song.length ? song[0].music : null;

  return (
    <section className='TimeKeeperNav'>
      {song.length ? <audio className='TimeKeeperNav-audio' src={currSong} ref={audioRef} /> : null}
      {!onTimeKeeperPage ? <p className='TimeKeeperNav-time'>{displayTime}</p> : null}
    </section>
  );
}

export default TimeKeeperNav;
