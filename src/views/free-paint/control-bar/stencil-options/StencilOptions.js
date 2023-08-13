import { useDispatch } from "react-redux";
import { setStencil } from "store/free-paint/freePaintReducer";

import "./StencilOptions.css";

import options from "data/free-paint/freePaintOptions";

const StencilOptions = ({ id }) => {
  const dispatch = useDispatch();

  const handleChangeDisplay = (e) => {
    dispatch(setStencil(id === "shapes" ? e.target.src : e.target.textContent));
  };

  return (
    <div className="StencilOptions" data-testid={`stencilOptions-${id}`}>
      {options[id].map((o) =>
        id === "shapes" ? (
          <img
            key={o[1]}
            onClick={handleChangeDisplay}
            className="StencilOptions-option"
            src={o[0]}
            alt={o[1]}
          />
        ) : (
          <span
            key={o}
            onClick={handleChangeDisplay}
            className="StencilOptions-option"
          >
            {o}
          </span>
        )
      )}
    </div>
  );
};

export default StencilOptions;
