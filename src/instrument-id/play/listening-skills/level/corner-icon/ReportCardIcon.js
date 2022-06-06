import React from 'react';
import { useParams } from 'react-router-dom';

import './ReportCardIcon.css';

import Icon from '../../../../../_components/icon/Icon';
import Popup from '../../../../../_components/popup/Popup';
import ReportCard from '../../../report-card/ReportCard';

import { reportCardIcon } from '../../../../_icons/iconImports';

const ReportCardIcon = () => {
  const { level } = useParams();
  const popupTrigger = (<Icon icon={reportCardIcon} text='REPORT CARD' size='50px' width='34px' />);
  return (
    <Popup
      title='REPORT CARD'
      trigger={popupTrigger}
      triggerClass='ReportCardIcon'
      popup={<ReportCard level={level} />}
    />
  );
};

export default ReportCardIcon;