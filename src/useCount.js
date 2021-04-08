import { useState } from 'react';

function useCount() {
  const [count, setCount] = useState();

  const increment = () => setCount(prev => prev + 1);

  return [count, increment];
}

export default useCount;
