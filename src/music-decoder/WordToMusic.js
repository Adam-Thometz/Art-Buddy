import React, { useContext, useEffect } from 'react';
import useVisited from '_hooks/useVisited';
import { PlayContext } from '_utils/_general/PlayContext';

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
  const { setPlayFn } = useContext(PlayContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setPlayFn(() => getSound({ volume, scale, sampleId: sound }).playSound);
  }, [volume, scale, sound, setPlayFn])

  useEffect(() => {
    dispatch(changeCurrGame(wordToMusic));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
      Transport.stop();
    };
  }, [dispatch]);

  return (<>
    <WindowNavbar page={currGame.name} />
    {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : (<>
      <WordForm />
      <DecoderControls />
      <AlphabetTable />
    </>)}
  </>);
};

export default WordToMusic;