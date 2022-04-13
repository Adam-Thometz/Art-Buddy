import React from "react";

import './LandingPage.css';

import ActivityCard from "./activities/ActivityCard";

import activities from "./activities/activityList";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>Welcome to Art Buddy!</h1>
      <div className="LandingPage-description">
        <p>Art Buddy is a collection of fun and interactive fine arts games designed specifically with special education goals in mind</p>
        <p>Pick an activity to begin.</p>
      </div>
      <div className="LandingPage-activities">
        {Object.keys(activities).map(a => (
          <ActivityCard
            name={activities[a].name}
            img={activities[a].img}
            url={activities[a].url}
            activityType={activities[a].activityType}
            description={activities[a].description}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;