/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { decrementOneSecond, goToNextSong, setMillisecondsLeftInSecond, toggleTimer } from "_redux/time-keeper/timeKeeperReducer";
import { setCurrTimer } from "_redux/_general/generalReducer";

import createDisplayTime from '_utils/time-keeper/createDisplayTime';
import generateVolume from '_utils/time-keeper/generateVolume';

const TimeKeeperNav = () => {
  const {
    song,
    secondsLeft,
    isPlaying,
    millisecondsLeft,
    currSongIdx,
    isMuted
  } = useSelector(state => state.timeKeeper);
  const [start, setStart] = useState(null);
  const { timer } = useSelector((state) => state.general);
  const { volume } = useSelector((state) => state.settings);
  const audioRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const onTimeKeeperPage = location.pathname === '/time-keeper';

  useEffect(() => {
    if (song.length) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, song, currSongIdx]);

  useEffect(() => {
    // start timer
    if (isPlaying && !timer) {
      setStart(new Date());
      // create a timer for decrementing a second
      if (!timer && secondsLeft) {
        const timeOut = setTimeout(() => {
          dispatch(decrementOneSecond());
          if (millisecondsLeft) dispatch(setMillisecondsLeftInSecond(0));
          clearTimer(timeOut);
        }, millisecondsLeft ? millisecondsLeft+3 : 994);
        dispatch(setCurrTimer(timeOut));
      }
      // end timer
      if (!secondsLeft) clearTimer(timer);
    // keep track of milliseconds when paused
    } else if (!isPlaying && start) {
      clearTimer(timer);
      const msLeft = 1000 - (new Date() - start);
      dispatch(setMillisecondsLeftInSecond(msLeft));
    }
  }, [isPlaying, secondsLeft, timer, audioRef.current?.ended]);

  useEffect(() => {
    if (audioRef.current && audioRef.current.ended) {
      clearTimer(timer);
      dispatch(goToNextSong());
    }
  }, [audioRef.current?.ended]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = generateVolume(volume, isMuted)
    }
  }, [volume, isMuted])

  const clearTimer = timer => {
    clearTimeout(timer);
    dispatch(setCurrTimer(null));
  }

  const playPause = () => dispatch(toggleTimer());

  const displayTime = song.length ? createDisplayTime(secondsLeft) : null;
  const currSong = song.length ? song[currSongIdx].music : null;

  return (
    <section className='TimeKeeperNav'>
      {song.length ? <audio className='TimeKeeperNav-audio' src={currSong} ref={audioRef} /> : null}
      {!onTimeKeeperPage ? <>
        <p onClick={playPause} className='TimeKeeperNav-time'>{displayTime}</p>
      </> : null}
    </section>
  );
}

export default TimeKeeperNav;
