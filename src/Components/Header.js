import React from 'react';

function Header(props) {
  return (
    <div className='header__container'>
      <ul
        className='header__menu'
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <li onClick={() => props.setSelected('')}>New Task</li>
        <li onClick={() => props.setSelected('inprogress')}>Inprogress Task</li>
        <li onClick={() => props.setSelected('completed')}>Completed</li>
        <li onClick={() => props.setSelected('archieve')}>Archieve Task</li>
      </ul>
    </div>
  );
}

export default Header;
