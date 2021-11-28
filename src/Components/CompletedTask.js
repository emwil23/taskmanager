import React, { useState } from 'react';

function CompletedTask() {
  const [list] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('lists')) || [];
    return saved;
  });

  return Object.keys(list).length === 0 ? (
    <div>NO TASKS PRESENT</div>
  ) : (
    <div className='task__container'>
      COMPLETED TASK LIST
      {list
        .reverse()
        .slice(0, 10)
        .map((list) => {
          if (list.doneTask === 1) {
            return (
              <div className='done__content'>
                <div className='done__title'>Title: {list.title}</div>
                <div className='done__description'>
                  Description: {list.description}
                </div>
                <div className='done__date'>Date/Time: {list.date}</div>
                <div className='done__text'>Task Completed</div>
              </div>
            );
          } else return null;
        })}
    </div>
  );
}

export default CompletedTask;
