/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { decrementOneSecond, goToNextSong, setMillisecondsLeftInSecond  } from "_redux/time-keeper/timeKeeperReducer";
import { setCurrTimer } from "_redux/_general/generalReducer";

import "./TimeKeeperNav.css";

import TimeLeft from 'time-keeper/time/time-left/TimeLeft';
import PlayPause from 'time-keeper/interface/play-pause/PlayPause';

import generateVolume from '_utils/time-keeper/generateVolume';
import urls, { instrumentIdUrls } from '_routes/routeUrls';

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
  const onUnuseablePage =
    (location.pathname === urls.timeKeeperUrl) ||
    (location.pathname === instrumentIdUrls.playSongMaker);

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
        console.log(millisecondsLeft)
        const timeOut = setTimeout(() => {
          dispatch(decrementOneSecond());
          if (millisecondsLeft) dispatch(setMillisecondsLeftInSecond(0));
          clearTimer(timeOut);
        }, millisecondsLeft > 0 ? millisecondsLeft+3 : 1005);
        dispatch(setCurrTimer(timeOut));
        // end timer
      } else if (!secondsLeft) {
        clearTimer(timer);
      }
    }
  }, [isPlaying, timer, audioRef.current?.ended]);
  
  useEffect(() => {
    // keep track of milliseconds when paused
    if (!isPlaying && start) {
      clearTimer(timer);
      const msLeft = 1000 - (new Date() - start);
      dispatch(setMillisecondsLeftInSecond(msLeft));
    }
  }, [isPlaying, start])

  useEffect(() => {
    if (audioRef.current && audioRef.current.ended) {
      clearTimer(timer);
      dispatch(goToNextSong());
    }
  }, [audioRef.current?.ended]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = generateVolume(volume, isMuted);
    }
  }, [volume, isMuted])

  const clearTimer = timer => {
    clearTimeout(timer);
    dispatch(setCurrTimer(null));
  }

  const currSong = song.length ? song[currSongIdx].music : null;

  return (
    <section className='TimeKeeperNav'>
      {song.length ? <audio className='TimeKeeperNav-audio' src={currSong} ref={audioRef} /> : null}
      {!onUnuseablePage && song.length ? <>
        <TimeLeft inNav />
        <PlayPause inNav />
      </> : null}
    </section>
  );
}

export default TimeKeeperNav;
