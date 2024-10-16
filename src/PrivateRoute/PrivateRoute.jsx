import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    console.log(location);
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex items-center justify-center py-72"><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}