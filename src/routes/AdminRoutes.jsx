import { Navigate, useLocation, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user-update'));
    // console.log(user?.user);

    // Check if the user has the admin role
    if (user?.user) {
        return children;
    }
    

    // If the user is not an admin, redirect to the auth page
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
