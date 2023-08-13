import "./Welcome.css";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Button from "components/button/Button";

const Welcome = ({ setHasVisited }) => {
  const handleVisited = () => setHasVisited(true);

  return (
    <section className="Welcome">
      <WindowNavbar page="WELCOME TO ART BUDDY!" />
      <article className="Welcome-description">
        <p>
          ART BUDDY is a collection of fun and interactive fine arts games
          designed specifically with academic goals in mind
        </p>
        <p>Click below to get started</p>
      </article>
      <Button colorId={0} onClick={handleVisited}>
        LET'S GO!
      </Button>
    </section>
  );
};

export default Welcome;
