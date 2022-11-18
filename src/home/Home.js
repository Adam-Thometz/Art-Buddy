import React from "react";
import useVisited from "_hooks/useVisited";

import Welcome from "./welcome/Welcome";
import Menu from "./menu/Menu";

const Home = () => {
  const [hasVisited, setHasVisited] = useVisited();
  return !hasVisited ? <Welcome setHasVisited={setHasVisited} /> : <Menu />
};

export default Home;