import React, { useState } from 'react';

function CreateTask(props) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    var getDate =
      date.getDate() +
      '/' +
      date.getMonth() +
      '/' +
      date.getFullYear() +
      '  ' +
      date.getHours() +
      ':' +
      date.getMinutes();

    var lists = JSON.parse(localStorage.getItem('lists')) || [];

    lists.push({
      id: lists.length + 1,
      title: title,
      description: desc,
      date: getDate,
      doneTask: 0,
      task: [],
    });

    localStorage.setItem('lists', JSON.stringify(lists));
    props.setList(JSON.parse(localStorage.getItem('lists')));
  };

  return (
    <div>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <div className='form__input'>
          <input
            name='title'
            type='text'
            required
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            name='description'
            type='text'
            required
            placeholder='Description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button>Create Task</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
