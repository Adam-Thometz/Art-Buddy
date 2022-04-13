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

export default LandingPage;