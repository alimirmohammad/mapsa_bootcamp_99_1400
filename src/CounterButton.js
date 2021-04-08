const CounterButton = ({ increment, count, name, age }) => {
  console.log(name);
  return (
    <button onClick={increment}>
      {name} {age} clicked {count} times
    </button>
  );
};

export default CounterButton;
