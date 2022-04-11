import React from "react";

import './LandingPage.css';

import ActivityCard from "./_common/activities/ActivityCard";

import activities from "./_common/activities/activityList";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>Welcome to Art Buddy!</h1>
      <div className="LandingPage-description">
        <p>Art Buddy is a collection of tools that you can use in your special education classroom to incorporate the arts while focusing on your student's goals.</p>
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