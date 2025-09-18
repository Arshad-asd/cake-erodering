import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { router } from './routes/AppRoutes';
import { store } from './store/store';
import { initializeAuth } from './store/slices/authSlice';
import NotificationContainer from './components/ui/notification';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize auth state from localStorage
    store.dispatch(initializeAuth());
  }, []);

  return (
    <Provider store={store}>
      <NotificationContainer />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
