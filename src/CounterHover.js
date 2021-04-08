import useCount from './useCount';

const CounterHover = ({ name, age }) => {
  const [count, increment] = useCount();
  return (
    <h2 onMouseOver={increment}>
      {name} {age} hovered {count} times
    </h2>
  );
};

export default CounterHover;
