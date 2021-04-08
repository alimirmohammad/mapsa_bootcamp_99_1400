import { useState } from 'react';

function withCount(WrappedComponent, step) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + step);
    return <WrappedComponent increment={increment} count={count} {...props} />;
  };
}

export default withCount;
