import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addStudent } from "../../actions";

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
      <label htmlFor="newStudent">Add a student: </label>
      <input
        type="text"
        id="newStudent"
        name="newStudent"
        value={studentName}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default NewStudentForm;