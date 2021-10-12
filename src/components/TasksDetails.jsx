import React from 'react';
import { useParams, useHistory} from 'react-router-dom';

import Button from './Button';
import './TaskDetails.css'

const TasksDetails = () => {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
 }


  const params = useParams();

  return ( 
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </>
   );
};
 
export default TasksDetails;