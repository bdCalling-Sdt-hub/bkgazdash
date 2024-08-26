import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({ children }) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user-update'));
    // console.log(user?.user);

    // Check if the user has the admin role
    if (user?.user?.role === 'admin') {
        return children;
    }

    // If the user is not an admin, redirect to the auth page
    return <Navigate to="/auth" state={{ from: location }} replace />;
};

export default AdminRoutes;
