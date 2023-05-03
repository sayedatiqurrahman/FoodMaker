import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext)
    if (user !== null && user !== undefined) {
        return children
    }

    return <Navigate to={'/login'} replace state={location} />

};

export default PrivateRoute;