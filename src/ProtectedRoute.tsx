import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { authStore } from './store/authStore';

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: ("sysadmin" | "administrativo" | "maestro" | "alumno")[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
        const { isAuthenticated, userRole } = authStore((state) => state);
    
      if (!isAuthenticated) {
        return <Navigate to="/login" />;
      } else if (!allowedRoles.includes(userRole!)) {
        return (
          <div className="error-page-container">
            <h1>Error 404 -- Page not found</h1>
          </div>
        );
      }
      return children;
    };
    
    export default ProtectedRoute;