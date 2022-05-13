import React from 'react';
import { useParams } from 'react-router-dom';

import Icon from '../../../icon/Icon';
import Popup from '../../../popup/Popup';

import { reportCardIcon } from '../../../../instrument-id/_icons/iconImports';
import ReportCard from '../../../../instrument-id/play/report-card/ReportCard';

const ReportCardIcon = () => {
  const { level } = useParams()
  const popupTrigger = (<Icon icon={reportCardIcon} text='REPORT CARD' size='50px' />)
  return (
    <Popup
      title='REPORT CARD'
      trigger={popupTrigger}
      triggerClass='WindowNavbar-corner-icon report-card'
      popup={<ReportCard level={level} />}
    />
  )
}

export default ReportCardIcon;