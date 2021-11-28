import React from 'react';

function SubTaskCard(props) {
  const handleClick = () => {
    var lists = JSON.parse(localStorage.getItem('lists'));
    if (lists[props.id - 1].task[props.subIndex].checked === 0) {
      lists[props.id - 1].task[props.subIndex].checked = 1;
      localStorage.setItem('lists', JSON.stringify(lists));
      props.setCounter(props.counter + 1);
    } else throw alert('COMPLETED!');
  };

  return (
    <div onClick={() => handleClick()} className='sub__task'>
      {props.subIndex + 1} : {props.subTask.sub}
    </div>
  );
}

export default SubTaskCard;
