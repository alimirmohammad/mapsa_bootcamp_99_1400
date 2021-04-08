import React, { useEffect, useRef, useState } from 'react';
import MyInput from './MyInput';

const RefFunctional = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const increment = () => setCount(prev => prev + 1);
  const interval = useRef(null);

  useEffect(() => {
    // inputRef.current.focus();
    // interval.current = setInterval(increment, 1000);
    // return () => {
    //   clearInterval(interval.current);
    // };
  }, []);

  const getName = () => {
    // alert(inputRef.current.value);
  };

  const stop = () => {
    clearInterval(interval.current);
  };

  return (
    <div className='App'>
      <MyInput />
      <button onClick={getName}>Get Name</button>
      <p>{count}</p>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default RefFunctional;
