import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../_redux/actions/actions";

import Dropdown from "../_components/dropdown/Dropdown";
import Options from "./options/Options";
import Sequence from "./sequence/Sequence";

import categories from "./_utils/categories";

const SequenceMaker = () => {
  const category = useSelector(state => state.sequenceMaker.category);
  const dispatch = useDispatch();

  const handleChangeCategory = e => {
    dispatch(changeCategory(e.target.value));
  }

  return (
    <div className="SequenceMaker">
      <Dropdown
        labelText="SELECT A SOUND CATEGORY"
        onChange={handleChangeCategory}
        options={categories}
      />
      {category ? <Options /> : null}
      <Sequence />
    </div>
  );
};

export default SequenceMaker;