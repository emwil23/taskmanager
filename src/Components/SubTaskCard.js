import React from 'react';

function SubTaskCard(props) {
  const handleClick = () => {
    var lists = JSON.parse(localStorage.getItem('lists')); //GET ALL THE LIST DATA
    if (lists[props.id - 1].task[props.subIndex].checked === 0) {
      //CHECK IF THE SUB-TASK IS COMPLETED OR NOT
      lists[props.id - 1].task[props.subIndex].checked = 1; //IF NOT THAN UPDATE THE LIST WITH COMPLETED
      localStorage.setItem('lists', JSON.stringify(lists)); //PUSH THE DATA BACK TO LOCAL STORAGE
      props.setCounter(props.counter + 1); //INCREASE THE COUNTER WHICH TRACKS THE NO. OF LENGTH OF SUB-TASK
    } else throw alert('COMPLETED!'); //IF THE TASK IS COMPLETED RETURN AN ALERT THAT IT IS ALREADY COMPLETED
  };

  return (
    <div onClick={() => handleClick()} className='sub__task'>
      {props.subIndex + 1} : {props.subTask.sub}
    </div>
  );
}

export default SubTaskCard;
