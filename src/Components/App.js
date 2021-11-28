import React, { useState } from 'react';

//Components
import CreateTask from './CreateTask';
import Header from './Header';
import NewTask from './NewTask';
import InProgress from './InProgressTask';
import CompletedTask from './CompletedTask';
import ArchieveTask from './ArchieveTask';

function App() {
  const [list, setList] = useState(() => {
    //Keeps track of all the lists
    const saved = JSON.parse(localStorage.getItem('lists')) || [];
    return saved;
  });

  const [selected, setSelected] = useState(''); //Kepp track of the selected layout screen

  return (
    <div className='main__container'>
      <CreateTask list={list} setList={setList} />
      <Header setSelected={setSelected} />
      {selected === '' ? (
        <NewTask list={list} setList={setList} />
      ) : selected === 'inprogress' ? (
        <InProgress list={list} setList={setList} />
      ) : selected === 'completed' ? (
        <CompletedTask />
      ) : (
        <ArchieveTask />
      )}
    </div>
  );
}

export default App;
