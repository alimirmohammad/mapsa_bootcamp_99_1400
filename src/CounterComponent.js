import { useEffect, useState } from 'react';

const CounterComponent = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <h2>Hello</h2>
      {children(increment, count)}
    </div>
  );
};

export default CounterComponent;
