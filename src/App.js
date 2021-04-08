import React from 'react';
import './App.css';
import CounterButton from './CounterButton';
import CounterHover from './CounterHover';
import withCount from './withCount';

const WithCountCounterHover = withCount(CounterHover, 5);
const WithCountCounterButton = withCount(CounterButton, 10);

function App() {
  return (
    <div className='App'>
      <WithCountCounterHover name='Soosan' age={12} />
      <WithCountCounterButton name='Sanaz' age={27} />
      <CounterButton name='Forough' age={40} />
    </div>
  );
}

export default App;
