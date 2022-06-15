import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../../_redux/actions/scoreKeeperActions";

import './NewStudentForm.css';

import Dropdown from "../../_components/dropdown/Dropdown";
import Button from "../../_components/button/Button";

import colorOptions from "../_utils/colorOptions";

const NewStudentForm = () => {
  const error = useSelector(state => state.scoreKeeper.error);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeColor = e => {
    setColor(e.target.id.replace('hex', '#'));
  };

  const handleSubmit = () => {
    dispatch(addStudent({name, color}));
    setName('');
  };

  return (
    <div className="NewStudentForm">
      <div className="NewStudentForm-student-name">
        <label className="NewStudentForm-label" htmlFor="newStudent">ADD A STUDENT: </label>
        <input
          className="NewStudentForm-input"
          type="text"
          id="newStudent"
          name="newStudent"
          value={name}
          onChange={handleChangeName}
        />
        {error ? <p>{error}</p> : null}
      </div>
      <Dropdown
        labelText="PICK A COLOR"
        onClick={handleChangeColor}
        options={colorOptions}
        defaultValue='hexFFFFFF'
      />
      <Button small colorId={3} onClick={handleSubmit}>ADD STUDENT</Button>
    </div>
  );
};

export default NewStudentForm;