import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from './redux/auth/auth-operations';

import AppRoutes from './AppRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <AppRoutes />
    </div>
  );
}

export default App;
