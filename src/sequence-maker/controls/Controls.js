import React from 'react';

import { useDispatch } from 'react-redux';
import { changeCategory } from "../../_redux/actions/sequenceMakerActions";

import './Controls.css'

import Dropdown from '../../_components/dropdown/Dropdown';

import categories from "../_utils/categories";

const Controls = () => {
  const dispatch = useDispatch();

  const handleChangeCategory = e => {
    dispatch(changeCategory(e.target.id));
  };

  return (
    <div className='Controls'>
      <Dropdown
        labelText="SOUND CATEGORY"
        onClick={handleChangeCategory}
        options={categories}
      />
    </div>
  );
};

export default Controls;