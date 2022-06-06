import React from 'react';

import Icon from '../../../../_components/icon/Icon';
import Popup from '../../../../_components/popup/Popup';
import SavedSongs from '../save-song/SavedSongs';

import savedSongsIcon from '../_icons/saved-songs.png';

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