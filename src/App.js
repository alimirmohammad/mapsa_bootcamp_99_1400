import React, { useState } from 'react';
import './App.css';
import CounterButton from './CounterButton';
import CounterComponent from './CounterComponent';
import CounterHover from './CounterHover';
import useInput from './useInput';

function App() {
  const username = useInput('Farnaz');
  const password = useInput('');

  const submit = () => {
    alert(`username: ${username.value}, password: ${password.value}`);
  };

  return (
    <div className='App'>
      <CounterHover name='Soosan' age={27} />
      <CounterButton name={55} age={18} />
      {/* <input type='text' {...password} />
      <input type='password' {...password} />
      <button onClick={submit}>Submit</button> */}
    </div>
  );
}

export default App;
