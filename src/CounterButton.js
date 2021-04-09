import useCount from './useCount';
import propTypes from 'prop-types';

const CounterButton = ({ name, age }) => {
  const [count, increment] = useCount();
  return (
    <button onClick={increment}>
      {name} {age} clicked {count} times
    </button>
  );
};

// CounterButton.defaultProps = {
//   name: 'Forough'
// };

CounterButton.propTypes = {
  name: propTypes.string.isRequired
};

export default CounterButton;
