import React from 'react'

import Popup from '../../../popup/Popup';
import Icon from '../../../icon/Icon';

import savedSongsIcon from '../_icons/saved-songs.png';

const SavedSongsIcon = () => {
  const popupTrigger = (<Icon icon={savedSongsIcon} text='SAVED SONGS' />)
  return (
    <Popup
      title='SAVED SONGS'
      trigger={popupTrigger}
      triggerClass='WindowNavbar-corner-icon saved-songs'
    />
  );
};

export default SavedSongsIcon;