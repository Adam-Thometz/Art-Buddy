import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  clearWheel,
  toggleAllColors,
  toggleColor,
  toggleGroup,
} from "_redux/color-theory/colorTheoryActions";

import "./PlayLevel.css";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import ColorWheel from "color-theory/color-wheel/ColorWheel";

import levels, { COLOR_THEORY_LEVELS } from "_data/color-theory/levels";

const PlayLevel = () => {
  const { level } = useParams();
  const dispatch = useDispatch();
  const [subLevel, setSubLevel] = useState("A");
  const [section, setSection] = useState(0);

  const category = COLOR_THEORY_LEVELS[level - 1];
  const stage = levels[category][subLevel].stages[section];

  useEffect(() => {
    const { colorsToToggle, groupsToToggle, toggleAll } = stage;
    if (toggleAll) {
      dispatch(toggleAllColors());
    } else {
      colorsToToggle.forEach((color) => dispatch(toggleColor(color)));
      groupsToToggle.forEach((group) => dispatch(toggleGroup(group)));
    }
    return () => dispatch(clearWheel());
  }, [dispatch, stage]);

  return (
    <>
      <WindowNavbar page="COLOR THEORY" />
      <span>
        Play: Level {level}
        {subLevel}
      </span>
      <main className="PlayLevel">
        <ColorWheel />
        <section className="PlayLevel-question">{stage.direction}</section>
      </main>
    </>
  );
};

export default PlayLevel;
