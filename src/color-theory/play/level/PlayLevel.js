import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PopupContext } from "_context/PopupContext";
import useReportCard from "_hooks/report-card/useReportCard";

import { useDispatch } from "react-redux";
import {
  clearWheel,
  toggleAllColors,
  toggleColor,
  toggleGroup,
  toggleText,
} from "_redux/color-theory/colorTheoryActions";

import "./PlayLevel.css";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Finished from "_components/popup/finished/Finished";
import Button from "_components/button/Button";
import ColorWheel from "color-theory/color-wheel/ColorWheel";

import levels from "_data/color-theory/levels";
import correctIcon from "_media/color-theory/correct.png";
import incorrectIcon from "_media/color-theory/incorrect.png";
import { colorTheoryUrls } from "_routes/routeUrls";
import updateReportCard from "_utils/_report-card/updateReportCard";

const PlayLevel = () => {
  const { level } = useParams();
  const { setCurrPopup } = useContext(PopupContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [levelState, setLevelState] = useState({
    subLevel: "A",
    section: 0,
    answerIdx: 0,
    gotIncorrect: false,
  });
  const [, setReportCard] = useReportCard("colorTheory");

  const category = Object.keys(levels)[level - 1];
  const { answerIdx, gotIncorrect, subLevel, section } = levelState;
  const { colorWheelState, task } = levels[category][subLevel][section];
  const { direction, colorText, answers, showAnswers } = task;

  useEffect(() => {
    const { colors, groups } = colorWheelState;
    if (!colors.length && !groups.length) {
      dispatch(toggleAllColors());
    } else {
      colors.forEach((color) => dispatch(toggleColor(color)));
      groups.forEach((group) => dispatch(toggleGroup(group)));
    }

    return () => dispatch(clearWheel());
  }, [dispatch, colorWheelState, task]);

  const updateAnswer = (e) => {
    const answer = task.answers[answerIdx];
    const selected = e.target.id;
    if (answer === selected) {
      dispatch(toggleText(answer));
      setLevelState((level) => ({
        ...level,
        answerIdx: level.answerIdx + 1,
        gotIncorrect: false,
      }));
    } else {
      setLevelState((level) => ({
        ...level,
        gotIncorrect: true,
      }));
    }
  };

  const handleReportCard = () => {
    setReportCard((reportCard) => {
      const key = category + subLevel;
      const toAdd = colorText ? colorText : answers;
      const result = {
        ...reportCard,
        [key]: {
          ...reportCard[key],
          results: updateReportCard({
            group: reportCard[key].results,
            name: toAdd,
          }),
        },
      };
      return result;
    });
  };

  const goToNextLevel = () => {
    handleReportCard();
    // go to next section of sublevel
    if (section < levels[category][subLevel].length - 1) {
      setLevelState((level) => ({
        ...level,
        section: section + 1,
        answerIdx: 0,
      }));
      // go to next sublevel
    } else if (subLevel === "A" && answerIdx === answers.length) {
      setLevelState((level) => ({
        ...level,
        subLevel: "B",
        section: 0,
        answerIdx: 0,
      }));
      // flash finish if at the end
    } else if (+level === 3) {
      setCurrPopup({
        title: "COLOR THEORY",
        popup: (
          <Finished
            gameId="colorTheory"
            gameName="Color Theory Game"
            prize="colors"
            findPrizeIn="Free Paint"
          />
        ),
        showConfetti: true,
      });
      // go to the next level
    } else {
      setLevelState((level) => ({
        ...level,
        subLevel: "A",
        section: 0,
        answerIdx: 0,
      }));
      navigate(`${colorTheoryUrls.playMain}/${+level + 1}`, { replace: true });
    }
  };

  const answerDisplay = answers
    .slice(0, answerIdx + (showAnswers ? 1 : 0))
    .map((answer, i) => {
      let src;
      let text;
      if (i < answerIdx) {
        src = correctIcon;
        text = "Correct!";
      } else if (i === answerIdx && gotIncorrect) {
        src = incorrectIcon;
        text = "Try again";
      } else {
        src = null;
        text = null;
      }
      return (
        <div className="PlayLevel-answer">
          <span className={`PlayLevel-question-color ${answer}`}>{answer}</span>
          <span>
            <img src={src} alt="" /> {text}
          </span>
        </div>
      );
    });

  return (
    <>
      <WindowNavbar page="COLOR THEORY" />
      <span>
        Play: Level {level}
        {subLevel}
      </span>
      <main className="PlayLevel">
        <ColorWheel update={updateAnswer} />
        <section className="PlayLevel-question">
          <p>{direction}</p>
          <div className="PlayLevel-target-color">
            <span className={`PlayLevel-question-color ${colorText}`}>
              {colorText}
            </span>
          </div>
          {answerDisplay}
          {answerIdx === answers.length && (
            <Button colorId={0} onClick={goToNextLevel}>
              NEXT LEVEL
            </Button>
          )}
        </section>
      </main>
    </>
  );
};

export default PlayLevel;
