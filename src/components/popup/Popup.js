import { useContext } from "react";
import { PopupContext } from "context/PopupContext";

import "./Popup.css";

import { CLOSE } from "assets/_general/general.assets";

const Popup = () => {
  const { currPopup, setCurrPopup } = useContext(PopupContext);

  const handleSetTrigger = (e) => {
    if (currPopup) {
      const correctBounds =
        e.currentTarget.classList[0] === "Popup-close" ||
        e.target.classList[0] === "Popup";
      if (correctBounds) {
        setCurrPopup(null);
      }
    }
  };

  return currPopup ? (
    <main className="Popup" onClick={handleSetTrigger}>
      <section
        className={`Popup-box${currPopup.showConfetti ? " confetti" : ""}`}
      >
        <header className="Popup-header">
          <h1>{currPopup.title}</h1>
          <aside className="Popup-close" onClick={handleSetTrigger}>
            <img src={CLOSE} alt="close button" />
            <span>CLOSE</span>
          </aside>
        </header>
        {currPopup.popup}
      </section>
    </main>
  ) : null;
};

export default Popup;
