import React, { useContext } from 'react';
import { PopupContext } from '_context/PopupContext';

import Icon from '_components/icon/Icon';
import SavedSongs from '../saved-songs/SavedSongs';

import { savedSongsIcon } from '_media/instrument-id/_icons/iconImports';

const SavedSongsIcon = () => {
  const { setCurrPopup } = useContext(PopupContext);

  const openSavedSongs = () => setCurrPopup({
    title: 'SAVED SONGS',
    popup: <SavedSongs />
  });

  return <Icon icon={savedSongsIcon} text='SAVED SONGS' size='49px' onClick={openSavedSongs} />;
};

export default SavedSongsIcon;