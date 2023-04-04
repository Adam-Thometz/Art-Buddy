import { useContext, useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PopupContext } from "_context/PopupContext";
import useReportCard from "_hooks/report-card/useReportCard";

import { useDispatch } from "react-redux";
import { clearWheel, toggleAllColors, toggleColor, toggleGroup, toggleText } from "_redux/color-theory/colorTheoryReducer";

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

const INITIAL_STATE = {
  subLevel: "A",
  section: 0,
  answerIdx: 0,
  gotIncorrect: false,
}

const ACTIONS = {
  NEXT_QUESTION: "NEXT_QUESTION",
  NEXT_SECTION: "NEXT_SECTION",
  NEXT_SUBLEVEL: "NEXT_SUBLEVEL",
  NEXT_LEVEL: "NEXT_LEVEL",
  GOT_INCORRECT: "GOT_INCORRECT"
}

const playLevelReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.NEXT_QUESTION:
      const newQuestion = state.answerIdx + 1;
      return { ...state, answerIdx: newQuestion, gotIncorrect: false };
    case ACTIONS.NEXT_SECTION:
      const nextSection = state.section + 1;
      return { ...state, section: nextSection, answerIdx: 0 };
    case ACTIONS.NEXT_SUBLEVEL:
      const nextSublevel = state.subLevel === "A" ? "B" : "A";
      return { ...state, subLevel: nextSublevel, section: 0, answerIdx: 0 };
    case ACTIONS.NEXT_LEVEL:
      return { ...state, subLevel: "A", section: 0, answerIdx: 0 };
    case ACTIONS.GOT_INCORRECT:
      return { ...state, gotIncorrect: true };
    default:
      return state;
  }
}

const PlayLevel = () => {
  const { level } = useParams();
  const { setCurrPopup } = useContext(PopupContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [levelState, setLevelState] = useReducer(playLevelReducer, INITIAL_STATE);
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
  }, [dispatch, colorWheelState]);

  const updateAnswer = (e) => {
    const answer = task.answers[answerIdx];
    const selected = e.target.id;
    if (answer === selected) {
      dispatch(toggleText(answer));
      setLevelState({ type: ACTIONS.NEXT_QUESTION });
    } else {
      setLevelState({ type: ACTIONS.GOT_INCORRECT });
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
    if (section < levels[category][subLevel].length - 1) {
      setLevelState({ type: ACTIONS.NEXT_SECTION });
    } else if (subLevel === "A" && answerIdx === answers.length) {
      setLevelState({ type: ACTIONS.NEXT_SUBLEVEL });
    } else if (+level === 3) {
      setCurrPopup({
        title: "COLOR THEORY",
        popup: <Finished gameId="colorTheory" gameName="Color Theory Game" prize="colors" findPrizeIn="Free Paint" />,
        showConfetti: true,
      });
    } else {
      setLevelState({ type: ACTIONS.NEXT_LEVEL });
      navigate(`${colorTheoryUrls.playMain}/${+level + 1}`, { replace: true });
    }
  };

  const answerDisplay = answers
    .slice(0, answerIdx + (showAnswers ? 1 : 0))
    .map((answer, i) => {
      let src, text = null;
      if (i < answerIdx) {
        src = correctIcon;
        text = "Correct!";
      } else if (i === answerIdx && gotIncorrect) {
        src = incorrectIcon;
        text = "Try again";
      }
      return (
        <div className="PlayLevel-answer">
          <span className={`PlayLevel-question-color ${answer}`}>{answer}</span>
          <span><img src={src} alt="" /> {text}</span>
        </div>
      );
    });

  return (
    <>
      <WindowNavbar page="COLOR THEORY" />
      <span>Play: Level {level}{subLevel}
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
            <Button colorId={0} onClick={goToNextLevel}>NEXT LEVEL</Button>
          )}
        </section>
      </main>
    </>
  );
};

export default PlayLevel;
