import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { clearGame } from '../_redux/actions/wordToMusicActions';

import './WordToMusic.css';

import WordForm from './word-form/WordForm';
import AlphabetTable from './alphabet-table/AlphabetTable';
import WordList from './word/WordList';
import { Synth } from 'tone';

const WordToMusic = () => {
  const dispatch = useDispatch();

  const loadSynth = () => {
    const synth = new Synth().toDestination();
    window.synth = synth;
  }

  useEffect(() => {
    return () => {
      dispatch(clearGame());
    }
  }, [dispatch]);

  return (
    <div className="WordToMusic" onLoad={loadSynth}>
      <div className='WordToMusic-form-chart-wrapper'>
        <AlphabetTable />
        <WordForm />
      </div>
      <WordList />
    </div>
  );
};

export default WordToMusic;
