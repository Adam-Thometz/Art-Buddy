import React, { useState } from "react";

import ActivityCard from "./ActivityCard";
import ActivitiesNavbar from "./ActivitiesNavbar";

import activities from "./activityList";

const Activities = () => {
  const [category, setCategory] = useState('games');
  const filteredActivities = activities.filter(a => a.activityType === category)
  return (
    <div className="Activities">
      <ActivitiesNavbar setCategory={setCategory} />
      <div className="LandingPage-activities">
        {filteredActivities.map(a => (
          <ActivityCard
            name={a.name}
            img={a.img}
            url={a.url}
            activityType={a.activityType}
            description={a.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities