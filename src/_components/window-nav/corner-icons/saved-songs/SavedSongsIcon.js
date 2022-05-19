import React from 'react'

import Popup from '../../../popup/Popup';
import Icon from '../../../icon/Icon';

import savedSongsIcon from '../_icons/saved-songs.png';
import SavedSongs from '../../../../instrument-id/play/song-maker/save-song/SavedSongs';

const SavedSongsIcon = () => {
  const popupTrigger = (<Icon icon={savedSongsIcon} text='SAVED SONGS' size='49px' />)
  return (
    <Popup
      title='SAVED SONGS'
      trigger={popupTrigger}
      triggerClass='WindowNavbar-corner-icon saved-songs'
      popup={<SavedSongs />}
    />
  );
};

export default SavedSongsIcon;