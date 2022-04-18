import React from "react";
import { useNavigate } from "react-router-dom";

import './Activities.css';

import MenuNavbar from "../menu-navbar/MenuNavbar";
import Button from "../../_components/button/Button";

import activities from "./activityList";
import colors from "../../_components/button/colorOrder";

const Activities = ({ category }) => {
  const navigate = useNavigate();
  const filteredActivities = category !== 'all' ?
    activities.filter(a => a.genre === category) :
    activities.filter(a => a.activityType === 'games');
  return (
    <div className="Activities">
      <MenuNavbar page={category} />
      <div className="Activities-list">
        {filteredActivities.map((a, i) => (
          <Button 
            outlineColor={colors[i%4]}
            onClick={() => navigate(a.url)}
          >
            {a.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Activities;