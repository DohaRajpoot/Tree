import { Navigate, Outlet } from 'react-router-dom';
import {useState} from 'react';
import{useEffect} from 'react';

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage upon component mount
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Convert token to Boolean (true if exists)
  }, []);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
