import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice } from "_redux/instrument-id/listening-skills/listeningSkillsTestReducer";

import "./Choice.css";

import Icon from "_components/icon/Icon";

import { CORRECT_ICON, INCORRECT_ICON, SWAP_ICON } from "_media/instrument-id/instrumentId.assets";
import updateReportCard from "_utils/_report-card/updateReportCard";

const Choice = ({ id, level, choice, save }) => {
  const { answer } = useSelector((state) => state.listeningSkillsTest);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();

  const checkAnswer = () => {
    const { name, family } = choice;
    const result = name === answer.name;
    setIsCorrect(result);

    if (result) {
      save((reportCard) => {
        const updatedGrade = updateReportCard({
          group: reportCard[family].results,
          name,
        });
        return {
          ...reportCard,
          [family]: {
            ...reportCard[family],
            results: updatedGrade,
          },
        };
      });
    }

    const timer = setTimeout(() => {
      if (result) dispatch(selectChoice({ id, level, choice: family }));
      setIsCorrect(null);
      clearTimeout(timer);
    }, 2000);
  };

  const swapInstrument = () =>
    dispatch(selectChoice({ id, level, choice: choice.family }));

  const isCorrectClass =
    isCorrect !== null ? (isCorrect ? " correct" : " incorrect") : "";

  const isCorrectWrapper =
    isCorrect !== null ? (
      <Icon
        size="150px"
        icon={isCorrect ? CORRECT_ICON : INCORRECT_ICON}
        text={isCorrect ? "CORRECT" : "INCORRECT"}
      />
    ) : null;

  return (
    <div className="Choice">
      <div
        className={`Choice-wrapper${isCorrectClass}`}
        data-testid="isCorrect"
      >
        {isCorrectWrapper}
      </div>
      <Icon icon={choice.icon} text={choice.name} onClick={checkAnswer} />
      <Icon
        icon={SWAP_ICON}
        text="SWAP"
        size="30px"
        onClick={swapInstrument}
        otherImgStyles={{ marginTop: "24px" }}
      />
    </div>
  );
};

export default Choice;
