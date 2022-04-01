import React from 'react';

import WordForm from './word-form/WordForm';
import AlphabetTable from './alphabet-table/AlphabetTable';
import WordList from './word/WordList';

import './WordToMusic.css';

const WordToMusic = () => {
  return (
    <div className="WordToMusic">
      <div className='WordToMusic-form-chart-wrapper'>
        <AlphabetTable />
        <WordForm />
      </div>
      <WordList />
    </div>
  );
};

export default WordToMusic;
