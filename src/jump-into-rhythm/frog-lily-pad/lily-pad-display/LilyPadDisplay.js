import { Fragment } from "react";

import "./LilyPadDisplay.css";

import { LILY_PAD, LILY_PAD_FLOWER } from "_media/jump-into-rhythm/jumpIntoRhythm.assets";

const LilyPadDisplay = ({ measure, id }) => {
  return (
    <div className="LilyPadDisplay">
      {measure.map((beat, i) => (
        <div key={`beat${i}`} className="LilyPadDisplay-lily-pad">
          {beat
            ? beat.duration.map((note) => (
                <Fragment key={`beat${i}-${id}`}>
                  <img
                    className="LilyPadDisplay-pad"
                    src={LILY_PAD}
                    alt="Lily pad"
                    style={{
                      width: note === "8n" || beat.isRest ? "45%" : "90%",
                    }}
                  />
                  {beat.isRest ? (
                    <img
                      className="LilyPadDisplay-flower"
                      src={LILY_PAD_FLOWER}
                      alt=""
                    />
                  ) : null}
                </Fragment>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};

export default LilyPadDisplay;
