import React from 'react';

import MaxScore from './max-score/MaxScore';
import NewStudentForm from './students/NewStudentForm';
import Students from './students/Students';

const ScoreKeeper = () => {  
  return (
    <div className="ScoreKeeper">
      <MaxScore />
      <NewStudentForm />
      <Students />
    </div>
  );
};

export default ScoreKeeper;