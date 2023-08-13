import { useSelector } from "react-redux";

import "./Valence.css";

import Face from "./face/Face";

import faces from "_data/mood-meter/faces";

const Valence = () => {
  const { valence } = useSelector((state) => state.moodMeter);

  return (
    <section className="Valence">
      <p>How are you feeling today?</p>
      <div className="Valence-faces">
        {faces.map((face) => {
          const { id, src } = face;
          return (
            <Face key={id} src={src} id={id} isSelected={id === valence} />
          );
        })}
      </div>
    </section>
  );
};

export default Valence;
