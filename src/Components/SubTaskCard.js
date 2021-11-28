import React from 'react';

function SubTaskCard(props) {
  const handleClick = () => {
    props.setCounter(props.counter + 1);
  };

  return <div onClick={() => handleClick()}>{props.subTask.sub}</div>;
}

export default SubTaskCard;
