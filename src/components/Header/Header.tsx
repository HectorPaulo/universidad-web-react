import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    
    return (
        <div className="flex flec-row self-center space-x-15">
            <button className="mt-10 bg-green-800 rounded-lg px-2 w-30 cursor-pointer hover:scale-105 hover:bg-gradient-to-r hover:bg-from-blue-700 hover:to-blue-950 animate-pulse" onClick={() => navigate("/dashboard")}>Volver al panel</button>
            <button className="cursor-pointer mt-10 border-b-2 mb-0 h-6" onClick={() => navigate("/alumnos")}>Alumnos</button>
            <button className="cursor-pointer mt-10 border-b-2 mb-0 h-6" onClick={() => navigate("/maestros")}>Maestros</button>
            <button className="cursor-pointer mt-10 border-b-2 mb-0 h-6" onClick={() => navigate("/administrativos")}>Administrativos</button>
            <button className="cursor-pointer mt-10 border-b-2 mb-0 h-6" onClick={() => navigate("/materias")}>Materias</button>
            <button className="cursor-pointer mt-10 border-b-2 mb-0 h-6" onClick={() => navigate("/carreras")}>Carreras</button>
            <button className="cursor-pointer mt-10 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    onClick={() => {
                        localStorage.removeItem("refreshToken");
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("role");
                        navigate("/login")
                    }}>
                Cerrar sesión
            </button>
        </div>
    );
};

export default Header;