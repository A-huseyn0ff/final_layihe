
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated, userRole, ...rest }) => {
  const isUser = userRole === "user";

  return isAuthenticated && isUser ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
