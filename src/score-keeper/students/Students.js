import React from "react";

import { useSelector } from "react-redux";

import './Students.css'

import Student from "./Student";

const Students = () => {
  const students = useSelector(state => state.scoreKeeper.students);
  return (
    <div className="Students">
      {students.map((s, i) => (
        <Student key={i} name={s.name} color={s.color} points={s.points} />
      ))}
    </div>
  )
};

export default Students;