import { useSelector } from "react-redux";

import "./Students.css";

import Student from "./student/Student";

const Students = () => {
  const { students } = useSelector((state) => state.scoreKeeper);

  return (
    <div className="Students">
      {students.map((s) => (
        <Student key={s.name} name={s.name} points={s.points} />
      ))}
    </div>
  );
};

export default Students;
