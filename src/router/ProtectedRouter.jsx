import React, { useContext } from "react";
import AuthContext from "../context/AuthContextProvider/provider";
import { Navigate } from "react-router";

const ProtectedRouter = ({ children }) => {
    const { token } = useContext(AuthContext);
    return token ? children : <Navigate to="/register" />;
};

export default ProtectedRouter;
