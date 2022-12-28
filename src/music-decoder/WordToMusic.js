import React, { useEffect, useState } from 'react';
import useVisited from '_hooks/useVisited';
import MusicDecoderContext from '_utils/music-decoder/MusicDecoderContext';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame } from '_redux/music-decoder/musicDecoderActions';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import WordForm from './word-form/WordForm';
import DecoderControls from './decoder-controls/DecoderControls';
import AlphabetTable from './alphabet-table/AlphabetTable';

import getSound from '_utils/music-decoder/getSound';
import { WTM } from '_data/_utils/localStorageKeys';
import { wordToMusic } from '_data/_activities/activityList';
import { Transport } from 'tone';

const WordToMusic = () => {
  const [hasVisited, setHasVisited] = useVisited(WTM);
  const { scale, sound } = useSelector(state => state.musicDecoder);
  const { currGame, volume } = useSelector(state => state.mainSettings);
  const [playFn, setPlayFn] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setPlayFn(() => getSound({ volume, scale, sampleId: sound }).playSound);
  }, [volume, scale, sound])

  useEffect(() => {
    dispatch(changeCurrGame(wordToMusic));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
      delete window.wordToMusicSound;
      Transport.stop();
    };
  }, [dispatch]);

  return (<MusicDecoderContext.Provider value={{ playFn, setPlayFn }}>
    <WindowNavbar page={currGame.name} />
    {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : (<>
      <WordForm />
      <DecoderControls />
      <AlphabetTable />
    </>)}
  </MusicDecoderContext.Provider>);
};

export default WordToMusic;