import React, { useEffect, useState } from 'react';

//Components
import SubTaskCard from './SubTaskCard';

function TaskCard(props) {
  //HANDLES ALL THE DATA FOR THE NEW LIST ASWELL AS INPROGRESS LIST
  const [subBTN, setsubBTN] = useState(false); //ADD SUB-TASK BTN STATE
  const [text, setText] = useState(''); //TRACK THE SUB-TASK TEXT
  const [counter, setCounter] = useState(0); //COUNT THE LENGTH OF THE TASK THAT IS COMPLETED
  const { id, title, description, date, task, doneTask } = props.list;

  const handleSubmit = (e) => {
    // e.preventDefault();
    var storage = [];
    storage = JSON.parse(localStorage.getItem('lists'));

    storage[id - 1].task.push({ sub: text, checked: 0 });
    localStorage.setItem('lists', JSON.stringify(storage));
    // props.setList(JSON.parse(localStorage.getItem('lists')));
  };

  useEffect(() => {
    if (task.length > 0 && task.length === counter) {
      var store = [];
      store = JSON.parse(localStorage.getItem('lists'));
      store[id - 1].doneTask = 1;

      localStorage.setItem('lists', JSON.stringify(store));
      var newList = JSON.parse(localStorage.getItem('lists'));
      props.updateList(newList);
    }
  }, [counter]);

  return props.progressToken &&
    task.length !== 0 &&
    task.length > counter &&
    doneTask !== 1 ? ( //CHECK IF THE TASK IS COMPLETED OR NOT || CHECK IF THE SUB TASK IS COMPLETED OR NOT
    <div className='task__list' key={id}>
      <div className='task__title'>Title: {title}</div>
      <div className='task__description'>Description: {description}</div>
      <div className='task__date'>Date/Time: {date}</div>
      <div className='task__sub'>
        Subtasks
        {console.log(counter)}
        {task.map((tsk, index) => {
          return (
            <SubTaskCard // RETRIVES THE SUB TASK DATA AND THE COUNT OF TASK COMPLETED
              key={tsk.value}
              id={id}
              subTask={tsk}
              subIndex={index}
              taskLength={task.length}
              setCounter={setCounter}
              counter={counter}
            />
          );
        })}
      </div>
      <button className='task__addsub' onClick={() => setsubBTN(!subBTN)}>
        {subBTN ? '-' : '+'}
      </button>
      {subBTN ? (
        <div className='sub__container'>
          <form className='form__sub' onSubmit={(e) => handleSubmit(e)}>
            <input
              className='sub__input'
              type='text'
              required
              placeholder='ADD SUBTASKS'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className='task__addsub'>+</button>
          </form>
        </div>
      ) : null}
    </div>
  ) : !props.progressToken && task.length === 0 ? (
    <div className='task__list' key={id}>
      <div className='task__title'>Title: {title}</div>
      <div className='task__description'>Description: {description}</div>
      <div className='task__date'>Date/Time: {date}</div>
      <button className='task__addsub' onClick={() => setsubBTN(!subBTN)}>
        {subBTN ? '-' : '+'}
      </button>
      {subBTN ? (
        <div className='sub__container'>
          <form className='form__sub' onSubmit={(e) => handleSubmit(e)}>
            <input
              className='sub__input'
              type='text'
              required
              placeholder='ADD SUBTASKS'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className='sub__submit'>+</button>
          </form>
        </div>
      ) : null}
    </div>
  ) : null;
}

export default TaskCard;
