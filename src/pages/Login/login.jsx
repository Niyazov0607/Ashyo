import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { login } from "../../service/authService";
import AuthContext from "../../context/AuthContextProvider/provider";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { setLogin, setToken } = useContext(AuthContext);

    const [formData, setFormData] = useState({ login: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);

        const body = {
            login: form.get("login"),
            password: form.get("password"),
        };

        console.log("Form Data:", body);

        try {
            const data = await login(formData);
            console.log(data);
            console.log(data);
            setLogin(data.login);
            setToken(data.accessToken);
            navigate("/");
        } catch (error) {
            console.log("Login error:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="p-8 text-center bg-[#1c1c1c00] text-white shadow-md w-96 border border-[grey]">
                <h2 className="mb-6 text-3xl font-bold">Log in</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="login"
                        value={formData.login}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[#333] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Phone number, username, or email"
                        required
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-[#333] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Password"
                            required
                        />
                        <button
                            type="button"
                            className="absolute text-blue-400 right-3 top-2"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Log In
                    </button>
                </form>

                <div className="flex items-center justify-center my-4">
                    <span className="w-1/3 border-t border-gray-600"></span>
                    <span className="mx-2 text-gray-400">OR</span>
                    <span className="w-1/3 border-t border-gray-600"></span>
                </div>

                <button className="w-full py-2 font-semibold text-white transition bg-[#4267B2] rounded-md hover:bg-[#365899] flex items-center justify-center gap-2">
                    <span>
                        <FaFacebook />
                    </span>{" "}
                    Log in with Facebook
                </button>

                <p className="mt-4 text-sm text-blue-500 cursor-pointer">
                    Forgot password?
                </p>

                <p className="mt-4 text-sm text-gray-400">
                    Don't have an account?{" "}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => navigate("/register")}
                    >
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
