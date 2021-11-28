import React, { useState } from 'react';

function CreateTask(props) {
  const [title, setTitle] = useState(''); // KEEPS TRACK OF THE TITLE FIELD
  const [desc, setDesc] = useState(''); // KEEPS TRACK OF THE THE DESCRIPTION FIELD

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    var getDate = // GET DATE AND TIME
      date.getDate() +
      '/' +
      date.getMonth() +
      '/' +
      date.getFullYear() +
      '  ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds();

    var lists = JSON.parse(localStorage.getItem('lists')) || []; //IF THE LIST EMPTY RETURN AN EMPTY ARRAY

    lists.push({
      id: lists.length + 1,
      title: title,
      description: desc,
      date: getDate,
      doneTask: 0, // 0  IF THE TASK IS NOT COMPLETED AND 1 IF THE TASK IS COMPLETED
      task: [], //TRACKS ALL THE SUB TASKS
    });

    localStorage.setItem('lists', JSON.stringify(lists)); //setItem accepts the argument as STRING
    props.setList(JSON.parse(localStorage.getItem('lists'))); //GETS THE UPDATED IN OUT LIST STATE WHENEVER NEW DATA IS PUSHED
  };

  return (
    <div>
      <form className='form__createTask' onSubmit={(e) => handleSubmit(e)}>
        <div className='createTask__input'>
          <input
            name='title'
            className='createTask__input-title'
            type='text'
            required
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            name='description'
            className='createTask__input-description'
            type='text'
            required
            placeholder='Description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className='createTask__input-submit'>Create Task</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
