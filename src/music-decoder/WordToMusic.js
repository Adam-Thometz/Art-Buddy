import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame } from '_redux/music-decoder/musicDecoderActions';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import WordForm from './word-form/WordForm';
import DecoderControls from './decoder-controls/DecoderControls';
import AlphabetTable from './alphabet-table/AlphabetTable';

import createSound from '_helpers/music-decoder/createSound';
import { WTM } from '_data/_utils/localStorageKeys';
import activities from '_data/_activities/activityList';

const WordToMusic = () => {
  const [hasVisited, setHasVisited] = useVisited(WTM);
  const { scale, sound } = useSelector(state => state.musicDecoder);
  const { currGame, volume } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') createSound({ volume, scale, sampleId: sound });
  }, [volume, scale, sound])

  useEffect(() => {
    dispatch(changeCurrGame(activities.wordToMusic));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
      delete window.wordToMusicSound;
    };
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : (<>
        <WordForm />
        <DecoderControls />
        <AlphabetTable />
      </>)}
    </>
  );
};

export default WordToMusic;