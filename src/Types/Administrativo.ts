export default interface Administrativo {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    edad: number;
    puesto: string;
    email: string;
    telefono: number;
    matricula: number;
    carrera?: string;
}