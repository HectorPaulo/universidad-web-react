import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Alumnos from "./pages/Alumnos/Alumnos.tsx";
import Maestros from "./pages/Maestros/Maestros.tsx";
import Materias from "./pages/Materias/Materias.tsx";
import Carreras from "./pages/Carreras/Carreras.tsx";
import Administrativos from "./pages/Administrativos/Administrativos.tsx";

    function App() {
      return (
        <>
          <BrowserRouter>
            <Routes>
                <Route
                    path="/alumnos"
                    element={
                        <ProtectedRoute allowedRoles={["sysadmin", "administrativo", "alumno"]}>
                            <Alumnos/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/maestros"
                    element={
                        <ProtectedRoute allowedRoles={["sysadmin", "administrativo", "maestro"]}>
                            <Maestros />
                        </ProtectedRoute>
                    }
                ></Route>
                <Route
                    path="/materias"
                    element={
                        <ProtectedRoute allowedRoles={["sysadmin", "administrativo", "alumno", "maestro"]}>
                            <Materias />
                        </ProtectedRoute>
                    }
                      ></Route>
                <Route
                    path="/administrativos"
                    element={
                        <ProtectedRoute allowedRoles={["sysadmin", "administrativo", "alumno", "maestro"]}>
                            <Administrativos />
                        </ProtectedRoute>
                    }
                      ></Route>
                <Route
                    path="/carreras"
                    element={
                        <ProtectedRoute allowedRoles={["sysadmin", "administrativo"]}>
                            <Carreras />
                        </ProtectedRoute>
                    }
                      ></Route>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={ <Dashboard /> }/>

            </Routes>
          </BrowserRouter>
        </>
      );
    }

export default App;