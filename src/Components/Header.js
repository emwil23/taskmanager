import React from 'react';

function Header(props) {
  return (
    <div className='header__container'>
      <ul className='header__ul'>
        <li onClick={() => props.setSelected('')} className='header__li'>
          New Task
        </li>
        <li
          onClick={() => props.setSelected('inprogress')}
          className='header__li'
        >
          Inprogress Task
        </li>
        <li
          onClick={() => props.setSelected('completed')}
          className='header__li'
        >
          Completed
        </li>
        <li
          onClick={() => props.setSelected('archieve')}
          className='header__li'
        >
          Archieve Task
        </li>
      </ul>
    </div>
  );
}

export default Header;
