import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PopupContext } from '_context/PopupContext';

import Icon from '_components/icon/Icon';
import ReportCard from '_components/report-card/ReportCard';

import { reportCardIcon } from '_media/instrument-id/_icons/iconImports';

const ReportCardIcon = () => {
  const { level } = useParams();
  const { setCurrPopup } = useContext(PopupContext);

  useEffect(() => {
    return () => setCurrPopup(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const openReportCard = () => setCurrPopup({
    title: 'REPORT CARD',
    popup: <ReportCard game="instrumentId" level={level} />
  });

  return <Icon icon={reportCardIcon} text='REPORT CARD' size='50px' width='34px' onClick={openReportCard} />;
};

export default ReportCardIcon;