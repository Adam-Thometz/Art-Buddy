import React, { useRef } from 'react';
import useFormFields from '_hooks/useFormFields';
import useRoster from '_hooks/useRoster';

import './NewRoster.css';

import AddIcon from '_components/icon/add-icon/AddIcon';
import Icon from '_components/icon/Icon';

import convertToId from '_helpers/_general/convertToId';
import deleteIcon from '_media/instrument-id/_icons/play/delete.png';
import check from '_media/settings/check.png';

const NewRoster = () => {
  const [input, setInput, resetInput, addInput] = useFormFields({ name: '', student1: '' });
  const errorRef = useRef();
  const [rosters, setRosters] = useRoster();

  const studentInputs = Object.keys(input)
    .filter(field => field.includes('student'))
    .map((field, i) => (
      <div className='NewRoster-form-control'>
        <label htmlFor={field}>Student {i+1}: </label>
        <input type='text' name={field} id={field} value={input[field]} onChange={setInput} />
      </div>
    ));

  const addStudent = e => {
    e.preventDefault();
    const newStudentInput = `student${Object.keys(input).length}`
    addInput(newStudentInput);
  };

  const updateInput = e => {
    e.preventDefault();
    setInput(e);
    const { value } = e.target;
    const hasError = value && !value.match(/^[A-Za-z0-9\s]+$/);
    errorRef.current.textContent = hasError ? "Only alphanumeric characters are allowed" : "";
  };

  const addRoster = () => {
    if (errorRef.current.textContent) return;
    const rosterId = convertToId(input.name);
    const name = input.name;
    const students = Object.keys(input)
      .filter(field => field.includes('student'))
      .map(student => input[student]);
    setRosters({ ...rosters, [rosterId]: { name, students } });
  };

  const reset = () => resetInput();

  return (
    <section className='NewRoster'>
      <aside className='NewRoster-options'>
        <AddIcon text='Name' size='50px' onClick={addStudent} />
        <Icon icon={deleteIcon} text="Delete" size='50px' onClick={reset} />
        <Icon icon={check} text="Done" size='50px' onClick={addRoster} />
      </aside>
      <aside className='NewRoster-students'>
        <label htmlFor='name'>Roster Name: </label>
        <input type='text' name='name' id='name' value={input.name} onChange={updateInput} />
        <p className='NewRoster-error' ref={errorRef}></p>
        {studentInputs}
      </aside>
    </section>
  );
};

export default NewRoster;