import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth, navigate]);
    return isAuth ? children : null;
};

export default ProtectedRoutes;