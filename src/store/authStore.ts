import {create} from "zustand";

interface AuthState {
    isAuthenticated: boolean;
    userRole: "sysadmin" | "administrativo" | "maestro" | "alumno" | null;
    login: (role: AuthState["userRole"]) => void;
    logout: () => void;
}

export const authStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    userRole: null,
    login: (role) => set({ isAuthenticated: true, userRole: role }),
    logout: () => set({ isAuthenticated: false, userRole: null }),
}));