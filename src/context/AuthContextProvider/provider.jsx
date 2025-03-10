import { createContext, useEffect, useState } from "react";
import { apiClient } from "../../config/apiConfig";
import { login as authLogin } from "../../service/authService"; 

const AuthContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
    login: null,
    setLogin: () => {},
});

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem("token");
        return storedToken !== "null" ? storedToken : null;
    });

    const [loginStatus, setLoginStatus] = useState(() => {
        return localStorage.getItem("login") === "true"; 
    });

    useEffect(() => {
        if (token) {
            apiClient.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`;
        } else {
            delete apiClient.defaults.headers.common["Authorization"];
        }

        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }

        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }

        if (loginStatus) {
            localStorage.setItem("login", loginStatus.toString());
        } else {
            localStorage.removeItem("login");
        }
    }, [user, token, loginStatus]);

    const handleLogin = async (username, password) => {
        try {
            const response = await authLogin(username, password);
            const { userData, token: newToken } = response;

            setUser(userData);
            setToken(newToken);

            setLoginStatus(true);
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", newToken);
            localStorage.setItem("login", "true");
        } catch (error) {
            console.error(
                "Login error:",
                error.response?.data || error.message
            );
            setLoginStatus(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                loginStatus,
                setLoginStatus,
                handleLogin, 
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
