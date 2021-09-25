import React from 'react';

 const Counter = (props) => {
  return (
    <button  onClick={() =>
      props.sign ==="+" ? props.updateCount(1) : props.updateCount(-1)} >
      {props.sign}
    </button>

  );
}
export default Counter;
