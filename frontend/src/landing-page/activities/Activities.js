import React from "react";

import ActivityCard from "./ActivityCard";

import activities from "./activityList";

const Activities = () => {
  return (
    <div className="LandingPage">
      <div className="LandingPage-activities">
        {activities.map(a => (
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