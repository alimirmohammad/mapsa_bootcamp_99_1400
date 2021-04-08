import useCount from './useCount';

const CounterButton = ({ name, age }) => {
  const [count, increment] = useCount();
  return (
    <button onClick={increment}>
      {name} {age} clicked {count} times
    </button>
  );
};

export default CounterButton;
