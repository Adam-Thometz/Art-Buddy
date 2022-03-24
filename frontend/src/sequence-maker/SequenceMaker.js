import React from "react";

import { useSelector } from "react-redux";

import Categories from "./categories/Categories";
import Options from "./options/Options";
import Sequence from "./sequence/Sequence";

const SequenceMaker = () => {
  const category = useSelector(state => state.sequenceMaker.category);
  return (
    <div className="SequenceMaker">
      <Categories />
      {category.length ? <Options /> : null}
      {category.length ? <Sequence /> : null}
    </div>
  );
};

export default SequenceMaker;