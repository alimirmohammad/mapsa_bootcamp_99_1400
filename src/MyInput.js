import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} type='text' />;
});

export default MyInput;
