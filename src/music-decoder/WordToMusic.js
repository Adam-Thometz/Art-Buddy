import { useContext, useEffect } from "react";
import useVisited from "_hooks/visited/useVisited";
import { PlayContext } from "_context/PlayContext";

import { useDispatch, useSelector } from "react-redux";
import { clearGame } from "_redux/music-decoder/musicDecoderActions";
import { changeCurrGame } from "_redux/_general/generalActions";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Instructions from "_components/instructions/Instructions";
import WordForm from "./word-form/WordForm";
import DecoderControls from "./decoder-controls/DecoderControls";
import AlphabetTable from "./alphabet-table/AlphabetTable";

import getSound from "_utils/music-decoder/getSound";
import { wordToMusic } from "_data/_activities/activityList";
import { Transport } from "tone";

const WordToMusic = () => {
  const [hasVisited, setHasVisited] = useVisited(wordToMusic.lsKey);
  const { scale, sound } = useSelector((state) => state.musicDecoder);
  const { currGame } = useSelector((state) => state.general);
  const { volume } = useSelector((state) => state.settings);
  const { setPlayFn } = useContext(PlayContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setPlayFn(() => getSound({ volume, scale, sampleId: sound }).playSound);
  }, [volume, scale, sound, setPlayFn]);

  useEffect(() => {
    dispatch(changeCurrGame(wordToMusic));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
      Transport.stop();
      setPlayFn(null);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? (
        <Instructions setVisited={setHasVisited} />
      ) : (
        <>
          <WordForm />
          <DecoderControls />
          <AlphabetTable />
        </>
      )}
    </>
  );
};

export default WordToMusic;
