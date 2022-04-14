import React from "react";
import { useSelector } from "react-redux";
import Student from "./Student";

const Students = () => {
  const students = useSelector(state => state.scoreKeeper.students);
  return (
    <div className="Students">
      {students.map(student => (
        <Student student={student} />
      ))}
    </div>
  )
};

export default Students;