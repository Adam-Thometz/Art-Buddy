import React, { useCallback } from "react";

import { useSelector } from "react-redux";

import './Students.css'

import Student from "./Student";
import Winner from "../winner/Winner";

const Students = () => {
  const students = useSelector(state => state.scoreKeeper.students);
  const maxScore = useSelector(state => state.scoreKeeper.maxScore);

  const findWinner = useCallback(() => (
    students.find(s => s.points === maxScore)
  ), [students, maxScore])
  
  const winner = findWinner()
  if (winner) return <Winner name={winner.name} color={winner.color} points={winner.points} />

  return (
    <div className="Students">
      {students.map(s => (
        <Student name={s.name} color={s.color} points={s.points} />
      ))}
    </div>
  )
};

export default Students;