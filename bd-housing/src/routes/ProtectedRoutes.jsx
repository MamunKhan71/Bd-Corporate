import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const isAuth = localStorage.getItem('isAuth');
    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth, navigate]);

    return isAuth ? children : null;
};

export default ProtectedRoutes;