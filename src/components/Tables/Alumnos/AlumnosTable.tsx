import {useEffect, useRef, useState} from "react";
import  axios from "axios";
import "datatables.net-dt/css/dataTables.dataTables.css";
import $ from "jquery";
import "datatables.net-dt";
import type Alumno from "../../../Types/Alumno.ts";

const AlumnosTable = () => {
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const fetchAlumnos = async () => {
            const response = await axios.get("http://localhost:5122/api/uvo/alumnos", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setAlumnos(response.data);
        };
        fetchAlumnos();
    }, []);
    
    useEffect(() => {
        if (alumnos.length > 0 && tableRef.current) {
            $(tableRef.current).DataTable();
        }
        
        return () => {
            if (tableRef.current) {
                $(tableRef.current).DataTable().destroy();
            } 
        };
    }, [alumnos]);
    
    return (
        <table className="display" ref={tableRef}>
            <thead>
            <tr>
                <th>Nombre completo</th>
                <th>Edad</th>
                <th>Correo electrónico</th>
                <th>Matrícula</th>
            </tr>
            </thead>
            <tbody>
            {alumnos.map((alumno: Alumno) => (
                <tr key={alumno.id}>
                    <td>{alumno.nombre} {alumno.apellidoPaterno} {alumno.apellidoMaterno}</td>
                    <td>{alumno.edad}</td>
                    <td>{alumno.email}</td>
                    <td>{alumno.matricula}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default AlumnosTable;