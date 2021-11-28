import React, { useState } from 'react';

function ArchieveTask() {
  const [list] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('lists')) || [];
    return saved;
  });

  return Object.keys(list).length === 0 ? (
    <div>NO LIST FOUND</div>
  ) : Object.keys(list).length > 2 ? (
    list
      .reverse()
      .filter((item, idx) => idx > 1)
      .map((list) => {
        return (
          <div className='archieve__container'>
            <div>{list.title}</div>
            <div>{list.description}</div>
            <div>{list.date}</div>
          </div>
        );
      })
  ) : null;
}

export default ArchieveTask;
