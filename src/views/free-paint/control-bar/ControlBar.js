import { useSelector, useDispatch } from "react-redux";
import { setIsErasing, setEditStencilMode } from "store/free-paint/freePaintReducer";

import "./ControlBar.css";

import ButtonWrapper from "./button-wrapper/ButtonWrapper";
import StencilOptions from "./stencil-options/StencilOptions";
import ColorOptions from "./color-options/ColorOptions";

import { SQUARE_SHAPE, STENCIL, PENCIL, ERASER } from "assets/free-paint/freePaint.assets";

const ControlBar = () => {
  const { color, isEditingStencil, isErasing } = useSelector(
    (state) => state.freePaint
  );
  const dispatch = useDispatch();

  const handleSetEraser = () => dispatch(setIsErasing(!isErasing));

  const handleEditStencilMode = () =>
    dispatch(setEditStencilMode(!isEditingStencil));

  return (
    <section className="ControlBar">
      <ButtonWrapper
        label="ABC"
        id="upperCase"
        Popout={StencilOptions}
        colorId={4}
      />
      <ButtonWrapper
        label="abc"
        id="lowerCase"
        Popout={StencilOptions}
        colorId={0}
      />
      <ButtonWrapper
        label="123"
        id="numbers"
        Popout={StencilOptions}
        colorId={1}
      />
      <ButtonWrapper
        label={SQUARE_SHAPE}
        id="shapes"
        Popout={StencilOptions}
        colorId={2}
      />

      <ButtonWrapper
        label="Stencil"
        iconImg={STENCIL}
        onClick={handleEditStencilMode}
      />
      <ButtonWrapper
        label="Pencil"
        id="colors"
        iconImg={PENCIL}
        Popout={ColorOptions}
        color={color}
      />
      <ButtonWrapper
        label="Eraser"
        iconImg={ERASER}
        onClick={handleSetEraser}
        color={isErasing ? "#FF69B4" : "#000000"}
      />
    </section>
  );
};

export default ControlBar;
