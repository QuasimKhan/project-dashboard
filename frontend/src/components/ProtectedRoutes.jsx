import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

const ProtectedRoute = ({ children }) => {
  const { auth, loading } = useAuth();

  // Show loading indicator while loading
  if (loading) {
    return <div>Loading...</div>; // Replace with a spinner or loader if desired
  }

  // Check if the user is authenticated
  if (!auth?.user || !auth?.token) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the requested component (children)
  return children;
};

export default ProtectedRoute;
