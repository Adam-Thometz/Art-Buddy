import { useContext } from "react";
import { PopupContext } from "_context/PopupContext";

import "./Popup.css";

import close from "_media/_general/close.png";

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
      <section className="Popup-box">
        <header className="Popup-header">
          <h1>{currPopup.title}</h1>
          <aside className="Popup-close" onClick={handleSetTrigger}>
            <img src={close} alt="close button" />
            <span>CLOSE</span>
          </aside>
        </header>
        {currPopup.popup}
      </section>
    </main>
  ) : null;
};

export default Popup;
