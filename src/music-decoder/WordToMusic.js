import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { clearGame } from '../_redux/actions/wordToMusicActions';

import './WordToMusic.css';

import WordForm from './word-form/WordForm';
import AlphabetTable from './alphabet-table/AlphabetTable';
import WordList from './word/WordList';
import DecoderControls from './decoder-controls/DecoderControls';

import createSound from './_utils/createSound';

const WordToMusic = () => {
  const dispatch = useDispatch();

  const onLoad = () => {
    if (process.env.NODE_ENV !== 'test') createSound();
  }

  useEffect(() => {
    return () => {
      dispatch(clearGame());
      delete window.wordToMusicSound;
    }
  }, [dispatch]);

  return (
    <main className="WordToMusic" onLoad={onLoad}>
      <header>
        <p>HULLO IM WORD TO MUSIC DECODER. TYPE SOME WORDS TO MAKE MUSIC PLZ</p>
      </header>
      <hr/>
      <WordForm />
      <DecoderControls />
      <AlphabetTable />
      <WordList />
    </main>
  );
};

export default WordToMusic;