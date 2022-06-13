import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { clearGame } from '../_redux/actions/wordToMusicActions';

import WindowNavbar from '../_components/window-nav/WindowNavbar';
import ToggleUpperCase from './toggle-uppercase/ToggleUpperCase';
import WordForm from './word-form/WordForm';
import DecoderControls from './decoder-controls/DecoderControls';
import AlphabetTable from './alphabet-table/AlphabetTable';

import createSound from './_utils/createSound';

const WordToMusic = () => {
  const dispatch = useDispatch();

  const loadSound = () => {
    createSound();
  };

  useEffect(() => {
    return () => {
      dispatch(clearGame());
      delete window.wordToMusicSound;
    };
  }, [dispatch]);

  return (
    <main className="WordToMusic" onLoad={loadSound}>
      <WindowNavbar page='WORD-TO-MUSIC DECODER' cornerIcon={<ToggleUpperCase />} />
      <header>
        <p>HULLO IM WORD TO MUSIC DECODER. TYPE SOME WORDS TO MAKE MUSIC PLZ</p>
      </header>
      <hr/>
      <WordForm />
      <DecoderControls />
      <AlphabetTable />
    </main>
  );
};

export default WordToMusic;