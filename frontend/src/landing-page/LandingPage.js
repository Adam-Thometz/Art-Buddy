import React from "react";

import './LandingPage.css';

import useLocalStorage from "../_hooks/useLocalStorage";
import Welcome from "./Welcome";
import Activities from "./activities/Activities";

const LandingPage = () => {
  const [hasVisited, setHasVisited] = useLocalStorage('visited')

  return (
    <div>
      {!hasVisited ? <Welcome setHasVisited={setHasVisited} /> : <Activities />}
    </div>
  )
};

export default LandingPage;