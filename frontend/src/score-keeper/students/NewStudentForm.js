import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addStudent } from "../../_actions/actions";

const NewStudentForm = () => {
  const dispatch = useDispatch();
  const [studentName, setStudentName] = useState('');

  const handleChange = e => {
    setStudentName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addStudent(studentName));
    setStudentName('');
  };

  return (
    <div className="NewStudentForm">
      <label className="NewStudentForm-label" htmlFor="newStudent">Add a student: </label>
      <input
      className="NewStudentForm-input"
        type="text"
        id="newStudent"
        name="newStudent"
        value={studentName}
        onChange={handleChange}
      />
      <button className="NewStudentForm-add-btn" onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default NewStudentForm;