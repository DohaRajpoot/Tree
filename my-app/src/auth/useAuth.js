// useAuth.js
import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLogged(!!token);
    }, []);

    const login = async (data) => {
        const url = "http://localhost:7000/api/auth";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        setIsLogged(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
