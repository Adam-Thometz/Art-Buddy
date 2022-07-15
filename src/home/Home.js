import React from "react";
import useLocalStorage from "_hooks/useLocalStorage";

import Welcome from "./welcome/Welcome";
import Menu from "./menu/Menu";

const Home = () => {
  const [hasVisited, setHasVisited] = useLocalStorage('visited');
  return !hasVisited ? <Welcome setHasVisited={setHasVisited} /> : <Menu />
};

export default Home;