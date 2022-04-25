import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeCategory, addToSequence } from "../_redux/actions/actions";

import Sequence from "./sequence/Sequence";
import Dropdown from "../_components/dropdown/Dropdown";
import Clickable from "../_components/clickable-icon/Clickable";
import Options from "../_components/option/Options";

import categories from "./_utils/categories";
import soundInfo from "./_media/soundInfo";

const SequenceMaker = () => {
  const category = useSelector(state => state.sequenceMaker.category);
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const dispatch = useDispatch();

  const handleChangeCategory = e => {
    dispatch(changeCategory(e.target.value));
  }

  const handleAddToSequence = e => {
    if (sequence.some(block => !block)) {
      dispatch(addToSequence(e.currentTarget.classList[1]))
    };
  }

  const options = soundInfo[category];
  console.log(options);

  return (
    <div className="SequenceMaker">
      <Dropdown
        labelText="SELECT A SOUND CATEGORY"
        onChange={handleChangeCategory}
        options={categories}
      />
      {category ? (
        <Options>
          {Object.keys(options).map(option => (
            <Clickable
              icon={options[option].image}
              size='150px'
              text={options[option].alt}
              additionalClass={option}
              onClick={handleAddToSequence}
            />
          ))}
        </Options>
      ) : null}
      <Sequence />
    </div>
  );
};

export default SequenceMaker;