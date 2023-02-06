import { useEffect } from "react";
import useReportCard from "_hooks/report-card/useReportCard";
import useVisited from "_hooks/visited/useVisited";

import { useSelector, useDispatch } from "react-redux";
import {
  clearGame,
  setAvailableColors,
} from "_redux/free-paint/freePaintActions";
import { changeCurrGame } from "_redux/_general/generalActions";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Instructions from "_components/instructions/Instructions";
import ControlBar from "./control-bar/ControlBar";
import Canvas from "./canvas/Canvas";
import Stencil from "./stencil/Stencil";

import { freePaint } from "_data/_activities/activityList";
import colorWheel from "_data/color-theory/colorWheel";
import checkHasPassed from "_utils/_report-card/checkHasPassed";

const FreePaint = () => {
  const [hasVisited, setHasVisited] = useVisited(freePaint.lsKey);
  const { currGame } = useSelector((state) => state.general);
  const { stencil } = useSelector((state) => state.freePaint);
  const [reportCard] = useReportCard("colorTheory");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(freePaint));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const availableColors = Object.keys(colorWheel);
    const colorsToAdd = [];
    if (colorsToAdd.length + 3 !== availableColors.length) {
      let jumpRate = 0;
      if (checkHasPassed(reportCard, ["tertiaryA", "tertiaryB"])) {
        jumpRate = 1;
      } else if (checkHasPassed(reportCard, ["secondaryA", "secondaryB"])) {
        jumpRate = 2;
      } else if (checkHasPassed(reportCard, ["primaryA", "primaryB"])) {
        jumpRate = 4;
      }

      if (jumpRate) {
        for (let i = 0; i < availableColors.length; i += jumpRate) {
          colorsToAdd.push(colorWheel[availableColors[i]].color.hex);
        }
        dispatch(setAvailableColors(colorsToAdd));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? (
        <Instructions setVisited={setHasVisited} />
      ) : (
        <>
          <ControlBar />
          <Canvas />
          {stencil ? <Stencil /> : null}
        </>
      )}
    </>
  );
};

export default FreePaint;
