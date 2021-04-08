import React from 'react';
import './App.css';
import CounterButton from './CounterButton';
import CounterComponent from './CounterComponent';
import CounterHover from './CounterHover';

function App() {
  return (
    <div className='App'>
      <CounterHover name='Soosan' age={27} />
      <CounterButton name='Melika' age={18} />
      <input />
    </div>
  );
}

export default App;
