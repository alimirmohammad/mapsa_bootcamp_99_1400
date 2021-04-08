import './App.css';
import ErrorBoundary from './ErrorBoundary';
import MyFriends from './MyFriends';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <MyFriends name='Parmida' />
      </ErrorBoundary>
      <ErrorBoundary>
        <MyFriends name='Pantea' />
      </ErrorBoundary>
      <ErrorBoundary>
        <MyFriends name='Mahnaz' />
      </ErrorBoundary>
      <ErrorBoundary>
        <MyFriends name='Akbar' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
