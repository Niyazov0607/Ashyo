import { createContext, useEffect, useState } from "react";
import { apiClient } from "../../config/apiConfig";
import { login as authLogin } from "../../service/authService"; // Assuming you have a login function in authService

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

    // Use localStorage to manage login status if needed
    const [loginStatus, setLoginStatus] = useState(() => {
        return localStorage.getItem("login") === "true"; // Adjust this logic based on your needs
    });

    useEffect(() => {
        // Set Authorization header if token is available
        if (token) {
            apiClient.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`;
        } else {
            delete apiClient.defaults.headers.common["Authorization"];
        }

        // Persist user and token to localStorage
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

        // Persist login status if needed
        if (loginStatus) {
            localStorage.setItem("login", loginStatus.toString());
        } else {
            localStorage.removeItem("login");
        }
    }, [user, token, loginStatus]);

    // Login handler function
    const handleLogin = async (username, password) => {
        try {
            const response = await authLogin(username, password);
            // Assuming the response contains user data and token
            const { userData, token: newToken } = response;

            // Set user and token in the state
            setUser(userData);
            setToken(newToken);

            // Update login status and store everything in localStorage
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
                handleLogin, // Providing the login function to be used in other components
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
