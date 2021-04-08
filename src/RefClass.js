import React from 'react';

class RefClass extends React.Component {
  state = { count: 0 };
  inputRef = React.createRef();
  interval;

  increment = () => this.setState(prev => ({ count: prev.count + 1 }));

  componentDidMount() {
    this.inputRef.current.focus();
    this.interval = setInterval(this.increment, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  stop = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className='App'>
        <input ref={this.inputRef} type='text' />
        <p>{this.state.count}</p>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default RefClass;
