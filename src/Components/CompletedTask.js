import React, { useState } from 'react';

function CompletedTask() {
  const [list] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('lists')) || [];
    return saved;
  });

  return Object.keys(list).length === 0 ? (
    <div>NO TASKS PRESENT</div>
  ) : (
    list
      .reverse()
      .slice(0, 10)
      .map((list) => {
        if (list.doneTask === 1) {
          return (
            <div className='done__container'>
              <div className='done__title'>{list.title}</div>
              <div className='done__description'>{list.description}</div>
              <div className='done__date'>{list.date}</div>
            </div>
          );
        } else return null;
      })
  );
}

export default CompletedTask;
