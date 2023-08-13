import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PopupContext } from "context/PopupContext";

import Icon from "components/icon/Icon";
import ReportCard from "components/report-card/ReportCard";

import { REPORT_CARD } from "assets/_general/general.assets";

const ReportCardIcon = () => {
  const { level } = useParams();
  const { setCurrPopup } = useContext(PopupContext);

  useEffect(() => {
    return () => setCurrPopup(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openReportCard = () =>
    setCurrPopup({
      title: "REPORT CARD",
      popup: <ReportCard game="instrumentId" level={level} />,
    });

  return (
    <Icon
      icon={REPORT_CARD}
      text="REPORT CARD"
      size="50px"
      width="34px"
      onClick={openReportCard}
    />
  );
};

export default ReportCardIcon;
