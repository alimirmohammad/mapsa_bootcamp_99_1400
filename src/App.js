import React, { useEffect } from 'react';
import './App.css';
import { useAsync } from './useAsync';
import { client } from './utility';

function App() {
  const { data: todos, error, isPending, isIdle, isFailed, run } = useAsync();

  useEffect(() => {
    run(client('todos'));
  }, [run]);

  if (isIdle || isPending) {
    return <h3>Loading...</h3>;
  }

  if (isFailed) {
    return <h3>Something went wrong {error.message}</h3>;
  }

  return (
    <div>
      <ul>
        {todos.slice(0, 10).map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
