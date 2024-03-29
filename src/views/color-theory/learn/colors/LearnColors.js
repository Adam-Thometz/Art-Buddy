import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { clearWheel, learnColors } from "store/color-theory/color-wheel/colorWheelReducer";

import "./LearnColors.css";

import WindowNavbar from "components/window-nav/WindowNavbar";
import ColorWheel from "views/color-theory/color-wheel/ColorWheel";

import descriptions from "./learnDescriptions";

const LearnColors = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(learnColors(category));
    return () => dispatch(clearWheel());
  }, [category, dispatch]);

  return (
    <>
      <WindowNavbar page={`${category.toUpperCase()} COLORS`} />
      <main className="LearnColors">
        <ColorWheel />
        <section className="LearnColors-description">
          {descriptions[category]}
        </section>
      </main>
    </>
  );
};

export default LearnColors;
