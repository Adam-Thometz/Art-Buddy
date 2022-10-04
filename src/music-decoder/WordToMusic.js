import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame } from '_redux/music-decoder/musicDecoderActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import WordForm from './word-form/WordForm';
import DecoderControls from './decoder-controls/DecoderControls';
import AlphabetTable from './alphabet-table/AlphabetTable';

import createSound from '_helpers/music-decoder/createSound';

const WordToMusic = () => {
  const { scale, sound } = useSelector(state => state.musicDecoder);
  const { volume } = useSelector(state => state.mainSettings);
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
    <main className="WordToMusic">
      <WindowNavbar page='WORD-TO-MUSIC DECODER' />
      <WordForm />
      <DecoderControls />
      <AlphabetTable />
    </main>
  );
};

export default WordToMusic;