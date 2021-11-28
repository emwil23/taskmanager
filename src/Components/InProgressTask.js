import React from 'react';

//Componnets
import TaskCard from './TaskCard';

function InProgressTask(props) {
  const handleList = (e) => {
    props.setList(e);
  };

  return Object.keys(props.list).length === 0 ? (
    <div className='loader'>No Task in Progres</div>
  ) : (
    props.list.map((list) => {
      return (
        <TaskCard list={list} progressToken={true} updateList={handleList} />
      );
    })
  );
}

export default InProgressTask;
