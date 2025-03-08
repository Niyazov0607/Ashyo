import React from "react";
import { Route, Routes } from "react-router";
import Main from "../components/MainHome/main";
import Login from "../pages/Login/login";
import Registration from "../pages/Registration/registration";
import ProtectedRouter from "./ProtectedRouter";
import Detail from "../pages/CardsDetails/detail";

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRouter>
                            <Main />
                        </ProtectedRouter>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/" element={<Registration />} />
                <Route
                    path="/product/:id"
                    element={<Detail key={window.location.pathname} />}
                />
            </Routes>
        </div>
    );
};

export default MainRouter;
