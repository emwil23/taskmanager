import React from 'react';

//Componets
import TaskCard from './TaskCard';

function InProgressTask(props) {
  const handleList = (e) => {
    props.setList(e); //PASS THE NEW LIST TO THE LIST STATE IN APP COMPONENT
  };

  return Object.keys(props.list).length === 0 ? (
    <div className='loader'>No Task in Progres</div>
  ) : (
    <div className='task__container'>
      {props.list.map((list) => {
        return (
          <TaskCard list={list} progressToken={true} updateList={handleList} />
        );
      })}
    </div>
  );
}

export default InProgressTask;
