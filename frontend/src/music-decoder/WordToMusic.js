import React from 'react';

import { useSelector } from 'react-redux';

import WordForm from './word-form/WordForm';
import AlphabetTable from './alphabet-table/AlphabetTable';
import Word from './word/Word';

const WordToMusicDecoder = () => {
  const wordDisplay = useSelector(store => store.wordToMusic.wordDisplay);

  return (
      <div className="App">
        <WordForm />
        <AlphabetTable />
        {wordDisplay.length ? (
          wordDisplay.map(word => (
            <Word word={word} />
          ))
        ) : null}
      </div>
  );
};

export default WordToMusicDecoder;
