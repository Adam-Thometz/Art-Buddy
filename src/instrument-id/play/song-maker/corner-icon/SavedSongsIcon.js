import { useContext, useEffect } from "react";
import { PopupContext } from "_context/PopupContext";

import Icon from "_components/icon/Icon";
import SavedSongs from "../saved-songs/SavedSongs";

import { SAVED_SONGS_ICON } from "_media/instrument-id/instrumentId.assets";

const SavedSongsIcon = () => {
  const { setCurrPopup } = useContext(PopupContext);

  useEffect(() => {
    return () => setCurrPopup(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openSavedSongs = () =>
    setCurrPopup({
      title: "SAVED SONGS",
      popup: <SavedSongs />,
    });

  return (
    <Icon
      icon={SAVED_SONGS_ICON}
      text="SAVED SONGS"
      size="49px"
      onClick={openSavedSongs}
    />
  );
};

export default SavedSongsIcon;
