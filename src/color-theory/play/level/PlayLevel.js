import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PopupContext } from "_context/PopupContext";

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

const PlayLevel = () => {
  const { level } = useParams();
  const { setCurrPopup } = useContext(PopupContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subLevel, setSubLevel] = useState("A");
  const [section, setSection] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(0);
  const [gotIncorrect, setGotIncorrect] = useState(false);

  const category = Object.keys(levels)[level - 1];
  const { colorWheelState, task } = levels[category][subLevel][section];

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

  useEffect(() => {}, [subLevel]);

  const update = (e) => {
    const answer = task.answers[answerIdx];
    const selected = e.target.id;
    if (answer === selected) {
      setAnswerIdx((answer) => answer + 1);
      dispatch(toggleText(answer));
      setGotIncorrect(false);
    } else {
      setGotIncorrect(true);
    }
  };

  const goToNextLevel = () => {
    if (section < levels[category][subLevel].length - 1) {
      setSection((section) => section + 1);
      setAnswerIdx(0);
    } else if (subLevel === "A" && answerIdx === answers.length) {
      setSubLevel("B");
      setAnswerIdx(0);
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
    } else {
      navigate(`${colorTheoryUrls.playMain}/${+level + 1}`);
      setSubLevel("A");
      setSection(0);
      setAnswerIdx(0);
    }
  };

  const { direction, colorText, answers, showAnswers } = task;

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
        <ColorWheel update={update} />
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
