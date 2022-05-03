import React from "react";
import useLocalStorage from "../_hooks/useLocalStorage";

import Window from "../_components/window/Window";
import Welcome from "./welcome/Welcome";
import Menu from "./menu/Menu";

const LandingPage = () => {
  const [hasVisited, setHasVisited] = useLocalStorage('visited')
 
  return !hasVisited ? 
    <Window small page='WELCOME TO ART BUDDY!'>
      <Welcome setHasVisited={setHasVisited} />
    </Window> :
    <Window small>
      <Menu category='games' />
    </Window>
};

export default LandingPage;