import { useContext } from "react";
import ReportCard from "_components/report-card/ReportCard";
import { PopupContext } from "_context/PopupContext";

import "./Finished.css";

import { REPORT_CARD } from "_assets/_general/general.assets";

const Finished = ({ gameId, gameName, prize, findPrizeIn, level = null }) => {
  const { setCurrPopup } = useContext(PopupContext);

  const openReportCard = () => {
    setCurrPopup({
      title: "REPORT CARD",
      popup: <ReportCard game={gameId} level={level} />,
    });
  };

  return (
    <div className="Finished">
      <p className="">
        Congratulations! You have completed the {gameName}! All {prize} are now
        available in {findPrizeIn}.
      </p>
      <div className="Finished-report-card" onClick={openReportCard}>
        <img src={REPORT_CARD} alt="" />
        <p>Report Card</p>
      </div>
    </div>
  );
};

export default Finished;
