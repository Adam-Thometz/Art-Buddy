import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Icon from "_components/icon/Icon";
import Options from "_components/option/Options";
import WindowNavbar from "_components/window-nav/WindowNavbar";

import { songMaker, listeningSkills } from "_media/instrument-id/_icons/iconImports";
import { instrumentIdUrls } from "_routes/routeUrls";

const PlayInstrumentId = () => {
  const { isPlaying } = useSelector(state => state.timeKeeper);
  const navigate = useNavigate();

  const goToListeningTest = () => navigate(instrumentIdUrls.playListening);
  const goToSongMaker = () => navigate(instrumentIdUrls.playSongMaker);

  return (
    <>
      <WindowNavbar page="INSTRUMENT ID: PLAY" />
      <header>
        <p>
          Master skills in Listening Skills to unlock instruments for the Song
          Maker!
        </p>
      </header>
      <Options width="50%">
        <Icon
          largeFont
          icon={listeningSkills}
          text="Listening Skills Test"
          onClick={goToListeningTest}
          />
        <Icon
          largeFont
          icon={songMaker}
          text="Song Maker"
          onClick={isPlaying ? null : goToSongMaker}
          otherImgStyles={isPlaying ? { opacity: 0.5 } : null}
          />
      </Options>
      {isPlaying && <p>Stop the Time Keeper to use the Song Maker</p>}
    </>
  );
};

export default PlayInstrumentId;
