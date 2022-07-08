import React, { useState } from 'react';
import useFormFields from '_hooks/useFormFields';
import useRoster from '_hooks/useRoster';

import Button from '_components/button/Button';

import convertToId from '_helpers/_utils/convertToId';

const NewRoster = () => {
  const [input, setInput, resetInput, addInput] = useFormFields({ name: '', student1: '' });
  const [error, setError] = useState(false);
  const [rosters, setRosters] = useRoster();

  const studentInputs = Object.keys(input)
    .filter(field => field.includes('student'))
    .map((field, i) => (
      <div className='NewRoster-form-control'>
        <label htmlFor={field}>Student {i+1}</label>
        <input
          type='text'
          name={field}
          id={field}
          value={input[field]}
          onChange={setInput}
        />
      </div>
    ));

  const addStudent = () => {
    const newStudentInput = `student${Object.keys(input).length}`
    addInput(newStudentInput);
  };

  const updateInput = e => {
    setInput(e);
    const { value } = e.target;
    const hasError = value && !value.match(/^[A-Za-z0-9\s]+$/);
    hasError ? setError(true) : setError(false);
  }

  const addRoster = () => {
    const rosterId = convertToId(input.name);
    const name = input.name;
    const students = Object.keys(input)
      .filter(field => field.includes('student'))
      .map(student => input[student]);
    setRosters({ ...rosters, [rosterId]: { name, students } });
  };

  return (
    <form className='NewRoster'>
      <label htmlFor='name'>Roster Name: </label>
      <input
        type='text'
        name='name'
        id='name'
        value={input.name}
        onChange={updateInput}
      />

      <p>Enter student names:</p>
      <div className='NewRoster-students'>
        {studentInputs}
      </div>
      <span onClick={addStudent}>Add another student</span>
      <div className='NewRoster-buttons'>
        {error ? <span>Only alphanumeric characters are allowed</span> : null}
        <Button small colorId={2} onClick={resetInput}>RESET</Button>
        <Button small colorId={0} onClick={addRoster}>CREATE</Button>
      </div>
    </form>
  );
};

export default NewRoster;