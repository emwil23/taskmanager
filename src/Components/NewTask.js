import React from 'react';

//Components
import TaskCard from './TaskCard';

function NewTask(props) {
  return Object.keys(props.list).length === 0 ? (
    <div className='loader'>No List</div>
  ) : (
    <div className='task__container'>
      NEW TASK
      {props.list.map((list) => {
        if (list.task.length === 0)
          return <TaskCard list={list} key={list.id} />;
        else return null;
      })}
    </div>
  );
}

export default NewTask;
