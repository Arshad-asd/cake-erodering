import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../layouts/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
import customerRoutes from './customerRoutes';





// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  // TODO: Implement actual authentication check
  const isAuthenticated = true; // This should be replaced with actual auth check
  const userRole = 'admin'; // This should be replaced with actual user role

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// Route configuration
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Customer Website Routes (Public)
      ...customerRoutes,

      // Fallback route
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

