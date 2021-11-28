import React, { useState } from 'react';

function ArchieveTask() {
  const [list] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('lists')) || [];
    return saved;
  }); // Retrive all the list

  return Object.keys(list).length === 0 ? (
    <div>NO LIST FOUND</div>
  ) : Object.keys(list).length > 2 ? (
    <div className='task__container'>
      {list
        .reverse()
        .filter((item, idx) => idx > 1)
        .map((list) => {
          return (
            <div className='done__content'>
              <div className='done__title'>Title: {list.title}</div>
              <div className='done__description'>
                Description: {list.description}
              </div>
              <div className='done__date'>Date/Time: {list.date}</div>
              <div className='done__text'>ARCHIVE TASK</div>
            </div>
          );
        })}
    </div>
  ) : null;
}

export default ArchieveTask;
