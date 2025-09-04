import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { authStore } from "../../store/authStore";

const Login = () => {
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const login = authStore((state) => state.login);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;

        try {
            console.log("Payload enviado:", { email, password });

            const response = await axios.post("http://localhost:5122/identity/login", {
                email,
                password
            });
            console.log(response);
            if (response.data.accessToken
                && response.data.refreshToken) {
                // Guardar tokens en localStorage
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);

                // Obtener el rol del usuario usando el token
                try {
                    // const userInfoRes = await axios.get("http://localhost:5122/identity/", {
                    //     headers: {
                    //         Authorization: `Bearer ${response.data.token}`
                    //     }
                    // });
                    // const role = userInfoRes.data.role;
                    const role = "sysadmin";

                    if (role) {
                        login(role);
                        setRedirect(true);
                    } else {
                        setError("No se pudo obtener el rol del usuario");
                    }
                } catch (err) {
                    setError("Error al obtener información del usuario: " + err);
                }
            } else {
                setError("Credenciales incorrectas");
            }
        } catch (err) {
            setError("Error al conectar con el servidor" + err);
        }
    };

    if (redirect) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700">
            <div className="bg-gray-700 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-white">Login</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Usuario</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Ingresa tu usuario"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <button
                        type="submit"
                        className="cursor-pointer hover:scale-105 bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
