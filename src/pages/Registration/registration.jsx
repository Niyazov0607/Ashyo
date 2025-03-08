import React, { useContext } from "react";
import { register } from "../../service/authService";
import AuthContext from "../../context/AuthContextProvider/provider";
import { NavLink, useNavigate } from "react-router";

const Registration = () => {
    const { setUser, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        const form = new FormData(event.target);

        const body = {
            username: form.get("username"),
            password: form.get("password"),
            email: form.get("email"),
            birthDate: form.get("birthDate"),
            gender: form.get("gender"),
        };

        console.log("Form Data:", body);

        try {
            const data = await register(body);
            console.log(data);
            setUser(data.user);
            setToken(data.accessToken);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="p-8 text-center bg-[#26262600] shadow-lg  w-96 border border-gray-700">
                <h2 className="mb-6 text-3xl font-bold text-white">Sign up</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Mobile Number or Email"
                        className="w-full px-3 py-2 bg-[#121212] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="w-full px-3 py-2 bg-[#121212] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-3 py-2 bg-[#121212] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    <input
                        type="date"
                        name="birthDate"
                        className="w-full px-3 py-2 bg-[#121212] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    <select
                        name="gender"
                        className="w-full px-3 py-2 bg-[#121212] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-white transition bg-[#0095F6] rounded-md hover:bg-[#0078D4]"
                    >
                        Sign Up
                    </button>
                </form>

                <NavLink to="/login">
                    <p className="mt-4 text-sm text-blue-500">
                        <span className="text-white">
                            {" "}
                            If you have a account:{" "}
                        </span>
                        Log in
                    </p>
                </NavLink>
            </div>
        </div>
    );
};

export default Registration;
