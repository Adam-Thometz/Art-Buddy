import useVisited from "hooks/visited/useVisited";

import Welcome from "./welcome/Welcome";
import Menu from "./menu/Menu";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    async function tryDB() {
      const response = await(await fetch("http://localhost:8000/instruments")).json();
      const data = atob(response.$binary.base64);
      console.log(data);
    }
    tryDB()
  }, []);
  const [hasVisited, setHasVisited] = useVisited();
  return !hasVisited ? <Welcome setHasVisited={setHasVisited} /> : <Menu />;
};

export default Home;
