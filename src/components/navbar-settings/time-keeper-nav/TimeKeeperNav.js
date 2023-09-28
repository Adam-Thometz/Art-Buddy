/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { decrementOneSecond, goToNextSong, setMillisecondsLeftInSecond } from "store/time-keeper/timeKeeperReducer";
import { setCurrTimer } from "store/_general/generalReducer";

import "./TimeKeeperNav.css";

import TimeLeft from 'views/time-keeper/time/time-left/TimeLeft';
import PlayPause from 'views/time-keeper/interface/play-pause/PlayPause';

import generateVolume from 'utils/time-keeper/generateVolume';
import urls, { instrumentIdUrls } from 'routes/routeUrls';

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

  const clearTimer = timer => {
    clearTimeout(timer);
    dispatch(setCurrTimer(null));
  }

  // play or pause
  useEffect(() => {
    if (song.length) {
      audioRef.current[isPlaying ? "play" : "pause"]();
    }
  }, [isPlaying, song, currSongIdx]);
  
  // start timer
  useEffect(() => {
    if (isPlaying && !timer) {
      setStart(new Date());
      // create a timer for decrementing a second
      if (!timer && secondsLeft) {
        const timeOut = setTimeout(() => {
          dispatch(decrementOneSecond());
          if (millisecondsLeft) dispatch(setMillisecondsLeftInSecond(0));
          clearTimer(timeOut);
        }, millisecondsLeft > 0 ? millisecondsLeft : 1005);
        dispatch(setCurrTimer(timeOut));
      // end timer
      } else if (!secondsLeft) {
        clearTimer(timer);
      }
    }
  }, [isPlaying, timer]);
  
  // keep track of milliseconds when paused
  useEffect(() => {
    if (!isPlaying && start) {
      clearTimer(timer);
      const msLeft = 1000 - (new Date() - start);
      dispatch(setMillisecondsLeftInSecond(msLeft));
    }
  }, [isPlaying, start]);

  // go to next song
  useEffect(() => {
    if (audioRef.current && audioRef.current.ended) {
      dispatch(goToNextSong());
    }
  }, [audioRef.current?.ended]);

  // change volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = generateVolume(volume, isMuted);
    }
  }, [volume, isMuted]);

  return (
    <section className='TimeKeeperNav'>
      {song.length ? <audio className='TimeKeeperNav-audio' src={song[currSongIdx].music} ref={audioRef} /> : null}
      {!onUnuseablePage && song.length ? <>
        <TimeLeft inNav />
        <PlayPause inNav />
      </> : null}
    </section>
  );
}

export default TimeKeeperNav;
