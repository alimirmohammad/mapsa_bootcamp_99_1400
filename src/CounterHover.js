const CounterHover = ({ increment, count, name, age }) => {
  console.log(name);
  return (
    <h2 onMouseOver={increment}>
      {name} {age} hovered {count} times
    </h2>
  );
};

export default CounterHover;
