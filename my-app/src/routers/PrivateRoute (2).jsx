// PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import routes from "../helper/routes";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { isLogged } = useAuth();
    
    if (!isLogged) {
        // If user is not logged in, redirect to login page
        return <Navigate to={routes.login} state={{ from: location }} />;
    }

    // If user is logged in, allow access to children components
    return children;
};

export default PrivateRoute;
