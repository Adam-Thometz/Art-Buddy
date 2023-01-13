import { useContext, useEffect } from 'react';
import { PlayContext } from '_context/PlayContext';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrTimer } from '_redux/_general/generalActions';

import './SongMaker.css';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import SavedSongsIcon from './corner-icon/SavedSongsIcon';
import PlaySave from './play-save/PlaySave';
import InstrumentDisplay from './instrument-display/InstrumentDisplay';

import createLoop from '_utils/instrument-id/createLoop';

const SongMaker = () => {
  const { song, isPlaying } = useSelector(state => state.songMaker);
  const { currTimer } = useSelector(state => state.general);
  const { volume } = useSelector(state => state.settings);
  const { playFn, setPlayFn } = useContext(PlayContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPlaying) {
      setPlayFn(() => createLoop(song, volume));
    } else {
      if (currTimer) clearTimeout(currTimer);
      const duration = playFn.getTimeLeft();
      const timer = setTimeout(() => {
        playFn.stopLoop();
        setPlayFn(() => createLoop(song, volume));
        clearTimeout(timer);
        dispatch(setCurrTimer(null));
      }, duration);
      dispatch(setCurrTimer(timer));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song, volume]);

  useEffect(() => {
    if (playFn && song.some(part => part && !!part.melodyId)) {
      isPlaying ? playFn.playLoop() : playFn.stopLoop();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) playFn.playLoop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playFn]);

  return (<>
    <WindowNavbar page='Song Maker' cornerIcon={<SavedSongsIcon />} />
    <section className='SongMaker-button-instrument-wrapper'>
      <PlaySave />
      <InstrumentDisplay />
    </section>
  </>);
};

export default SongMaker;