import React from 'react';

import './ScoreKeeper.css';

import NewStudentForm from './students/NewStudentForm';
import Students from './students/Students';

const ScoreKeeper = () => {  
  return (
    <div className="ScoreKeeper">
      <h1>Score Keeper</h1>
      <NewStudentForm />
      <Students />
    </div>
  );
};

export default ScoreKeeper;