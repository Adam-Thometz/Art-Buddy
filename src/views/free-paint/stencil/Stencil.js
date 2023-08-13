import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

import { useSelector, useDispatch } from "react-redux";
import { setStencil } from "store/free-paint/freePaintReducer";

import "./Stencil.css";

import { CLOSE } from "assets/_general/general.assets";
import { RESIZE } from "assets/free-paint/freePaint.assets";
import getNewSize from "lib/free-paint/getNewSize";

const Stencil = () => {
  const { stencil, isEditingStencil } = useSelector((state) => state.freePaint);
  const dispatch = useDispatch();
  const stencilRef = useRef();

  const [resizeInfo, setResizeInfo] = useState({ active: false, x: "", y: "" });
  const [size, setSize] = useState({
    width: "",
    height: "",
    defaultWidth: "",
    defaultHeight: "",
  });

  useEffect(() => {
    const width = stencilRef.current.clientWidth;
    const height = stencilRef.current.clientHeight;
    setSize({ width, height, defaultWidth: width, defaultHeight: height });
  }, [stencilRef]);

  const beginResize = (e) =>
    setResizeInfo({ active: true, x: e.clientX, y: e.clientY });

  const handleResize = (e) => {
    if (!resizeInfo.active) return;
    const { x, y } = resizeInfo;
    const { clientX, clientY } = e;
    const { height, width } = getNewSize({
      x,
      y,
      clientX,
      clientY,
      currSize: size,
    });
    setResizeInfo({ ...resizeInfo, x: clientX, y: clientY });
    setSize({ ...size, height, width });
  };

  const endResize = () => setResizeInfo({ ...resizeInfo, active: false });

  const handleClearDisplay = () => dispatch(setStencil(null));

  const style = {
    width: `${size.width}px`,
    height: `${size.height}px`,
    zIndex: isEditingStencil ? 5 : 3,
    "--stencilX": `${size.width / size.defaultWidth}`,
    "--stencilY": `${size.height / size.defaultHeight}`,
  };

  return (
    <Draggable bounds="parent" cancel=".Stencil-resize">
      <div className="Stencil" style={style} ref={stencilRef}>
        {isEditingStencil ? (
          <img
            className="Stencil-clear"
            src={CLOSE}
            alt=""
            aria-label="Clear the stencil"
            data-testid="stencil-close"
            onClick={handleClearDisplay}
          />
        ) : null}
        {stencil.startsWith("data:image") ? (
          <img className="Stencil-shape" src={stencil} alt="" />
        ) : (
          <span className="Stencil-text">{stencil}</span>
        )}
        {isEditingStencil ? (
          <img
            className="Stencil-resize"
            src={RESIZE}
            draggable={false}
            alt=""
            aria-label="Resize the stencil"
            data-testid="stencil-resize"
            onMouseDown={beginResize}
            onMouseUp={endResize}
            onMouseMove={handleResize}
          />
        ) : null}
      </div>
    </Draggable>
  );
};

export default Stencil;
