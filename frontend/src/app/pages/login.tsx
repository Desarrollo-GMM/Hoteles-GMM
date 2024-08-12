"use client";
import React, { useState, useEffect } from "react";
// Components
import InputField from "../components/login/input";
import Sidebar from "../components/principal/sidebar";
//Services
import { login } from "../services/authService";
import { userGetMe } from "../services/authService";


const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState<string | null>(null); 
    const [userData, setUserData] = useState<UserResponse[] | null>(null);

    useEffect(() => {
        const fetchTokenFromURL = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const tokenFromURL = urlParams.get("redirect"); 
            if (tokenFromURL) {
                setToken(tokenFromURL);
            }
        };
        fetchTokenFromURL();
    }, []);

    useEffect(() => {
        if (token) {
            const fetchUserData = async () => {
                try {
                    const data = await userGetMe(token);
                    console.log("<<<<<<<<<<<<<<33", data);
                    setUserData(data);
                } catch (err) {
                    console.error("Error fetching user data:", err);
                    setError("Error al obtener los datos del usuario");
                }
            };

            fetchUserData();
        }
    }, [token]);

    useEffect(() => {
        if (userData && userData.length > 1) {
            console.log("<<<<<<<<<<35 userData updated:", userData[1].full_name);
        }
    }, [userData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (err) {
            setError("Error al iniciar sesión");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
                <h2 className="text-2xl font-bold mb-4">{userData && userData.length > 1 ? userData[1].full_name : "Cargando..."}</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                />
                <InputField
                    label="Contraseña"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Tu contraseña"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
