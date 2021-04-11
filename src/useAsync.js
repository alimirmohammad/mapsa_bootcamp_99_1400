import { useCallback, useReducer } from 'react';

function asyncReducer(state, action) {
  switch (action.type) {
    case 'pending':
      return { data: null, error: null, status: 'pending' };
    case 'resolved':
      return { data: action.payload, error: null, status: 'resolved' };
    case 'rejected':
      return { data: null, error: action.payload, status: 'rejected' };
    default:
      throw new Error('Something');
  }
}

export function useAsync(initialState = {}) {
  const [state, dispatch] = useReducer(asyncReducer, {
    data: null,
    error: null,
    status: 'idle',
    ...initialState
  });

  const run = useCallback(promise => {
    if (!promise || !promise.then) {
      throw new Error('Not a Promise');
    }
    dispatch({ type: 'pending' });
    promise
      .then(res => dispatch({ type: 'resolved', payload: res }))
      .catch(err => dispatch({ type: 'rejected', payload: err }));
  }, []);

  const { data, error, status } = state;

  const isIdle = status === 'idle';
  const isPending = status === 'pending';
  const isSuccess = status === 'resolved';
  const isFailed = status === 'rejected';

  return { data, error, isIdle, isPending, isSuccess, isFailed, run };
}
