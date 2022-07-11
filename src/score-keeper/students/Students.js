import React from "react";

import { useSelector } from "react-redux";

import './Students.css';

import Student from "./Student";

const Students = () => {
  const { students } = useSelector(state => state.scoreKeeper);

  return (
    <div className="Students">
      {!students.length ? (
        <p className="Students-warning">Load students by picking a roster in Settings (or creating one if you haven't)</p>
      ) : students.map((s) => <Student key={s.name} name={s.name} points={s.points} />)}
    </div>
  );
};

export default Students;