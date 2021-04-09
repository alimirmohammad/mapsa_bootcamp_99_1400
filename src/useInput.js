import { useState } from 'react';

function useInput(initialState) {
  const [data, setData] = useState(initialState);
  const onChange = event => setData(event.target.value);
  return { value: data, onChange };
}

export default useInput;
