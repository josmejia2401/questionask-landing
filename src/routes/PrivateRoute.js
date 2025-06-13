// src/routes/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { AuthStore } from '../store/index';
const PrivateRoute = ({ children }) => {
    return AuthStore.getState().isAuthenticated ? children : <Navigate to="https://questionask-dev.netlify.app" />;
};
export default PrivateRoute;
