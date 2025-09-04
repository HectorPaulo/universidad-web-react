import {useEffect, useRef, useState} from "react";
import  axios from "axios";
import "datatables.net-dt/css/dataTables.dataTables.css";
import $ from "jquery";
import "datatables.net-dt";
import type Administrativo from "../../../Types/Administrativo.ts";

const AdministrativosTable = () => {
    const [administrativos, setAdministrativos] = useState<Administrativo[]>([]);
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const fetchAdministrativos = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/uvo/administrativos`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setAdministrativos(response.data);
        };
        fetchAdministrativos();
    }, []);

    useEffect(() => {
        if (administrativos.length > 0 && tableRef.current) {
            $(tableRef.current).DataTable();
        }

        return () => {
            if (tableRef.current) {
                $(tableRef.current).DataTable().destroy();
            }
        };
    }, [administrativos]);

    return (
        <table className="display" ref={tableRef}>
            <thead>
            <tr>
                <th>Nombre completo</th>
                <th>Edad</th>
                <th>Puesto</th>
                <th>Correo electrónico</th>
                <th>Teléfono</th>
                <th>Matrícula</th>
            </tr>
            </thead>
            <tbody>
            {administrativos.map((administrativo: Administrativo) => (
                <tr key={administrativo.id}>
                    <td>{administrativo.nombre} {administrativo.apellidoPaterno} {administrativo.apellidoMaterno}</td>
                    <td>{administrativo.edad}</td>
                    <td>{administrativo.puesto}</td>
                    <td>{administrativo.email}</td>
                    <td>{administrativo.telefono}</td>
                    <td>{administrativo.matricula}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default AdministrativosTable;