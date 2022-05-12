import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReportCard from "../../../_hooks/useReportCard";

import { useSelector, useDispatch } from "react-redux";
import { loadReportCards } from "../../../_redux/actions/insturmentIdActions";

import './ListeningSkills.css';

import Button from "../../../_components/button/Button";
import Icon from "../../../_components/icon/Icon";

import { listeningSkills, reportCardIcon } from "../../_icons/iconImports";
import { instrumentIdUrls } from "../../../_routes/routeUrls";

const ListeningSkills = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reportCard1 = useSelector(state => state.instrumentId.reportCard1);
  const reportCard2 = useSelector(state => state.instrumentId.reportCard2);
  const [savedReportCard1] = useReportCard(`instrument-id-level-1-report-card`);
  const [savedReportCard2] = useReportCard(`instrument-id-level-2-report-card`);

  useEffect(() => {
    dispatch(loadReportCards({ savedReportCard1, savedReportCard2 }));
  }, [dispatch, savedReportCard1, savedReportCard2]);

  return (
    <div className="ListeningSkills">
      <div className="ListeningSkills-icon">
        <Icon
          icon={listeningSkills}
          text='Listening Skills Test'
        />
      </div>
      <div className="ListeningSkills-levels-report-cards">
        <p>Practice your listening skills to unlock instruments that you can play later on the Song Maker section!</p>
        {[1,2].map(level => (
          <div className="ListeningSkills-level">
            <Button
              colorId={level-1}
              onClick={() => navigate(`${instrumentIdUrls.playListeningUrl}/${level}`)}
            >Level {level}</Button>
            <div className="ListeningSkills-report-card">
              <img src={reportCardIcon} alt='' />
              <p>Report Card</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeningSkills;