import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: null };

  static getDerivedStateFromError(error) {
    return { hasError: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong!</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
