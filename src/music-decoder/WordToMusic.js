import React, { useEffect } from 'react';
import useLocalStorage from '_hooks/useLocalStorage';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame } from '_redux/music-decoder/musicDecoderActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import WordForm from './word-form/WordForm';
import DecoderControls from './decoder-controls/DecoderControls';
import AlphabetTable from './alphabet-table/AlphabetTable';

import createSound from '_helpers/music-decoder/createSound';
import activities from '_data/menu/activityList';

const WordToMusic = () => {
  const [hasVisited, setHasVisited] = useLocalStorage('visited-wtm');
  const { scale, sound } = useSelector(state => state.musicDecoder);
  const { volume } = useSelector(state => state.mainSettings);
  const gameInfo = activities.find(game => game.name === 'WORD-TO-MUSIC DECODER');
  const dispatch = useDispatch();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') createSound({ volume, scale, sampleId: sound });
  }, [volume, scale, sound])

  useEffect(() => {
    return () => {
      dispatch(clearGame());
      delete window.wordToMusicSound;
    };
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={gameInfo.name} />
      {!hasVisited ? <Instructions game={gameInfo} setHasVisited={setHasVisited} /> : (<>
        <WordForm />
        <DecoderControls />
        <AlphabetTable />
      </>)}
    </>
  );
};

export default WordToMusic;