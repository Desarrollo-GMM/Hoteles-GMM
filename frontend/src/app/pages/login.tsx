"use client";
import React, { useState } from "react";
import InputField from "../components/login/input";
import { login } from "../services/authService";
// import dotenv from "dotenv";

const LoginForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			// dotenv.config();
			await login(email, password);
			console.log("<<<<<<<<<<<14", email, password);
		} catch (err) {
			setError("Error al iniciar sesión");
		}
	};

	return (
		<div className="w-full max-w-md mx-auto mt-10">
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded px-8 py-6"
			>
				<h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
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
