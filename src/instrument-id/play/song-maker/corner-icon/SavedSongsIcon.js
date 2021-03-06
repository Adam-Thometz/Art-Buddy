import React from 'react';

import Icon from '_components/icon/Icon';
import Popup from '_components/popup/Popup';
import SavedSongs from '../saved-songs/SavedSongs';

import { savedSongsIcon } from '_media/instrument-id/_icons/iconImports';

const SavedSongsIcon = () => {
  const popupTrigger = (<Icon icon={savedSongsIcon} text='SAVED SONGS' size='49px' />)
  return (
    <Popup
      title='SAVED SONGS'
      trigger={popupTrigger}
      triggerClass='SavedSongsIcon'
      popup={<SavedSongs />}
    />
  );
};

export default SavedSongsIcon;