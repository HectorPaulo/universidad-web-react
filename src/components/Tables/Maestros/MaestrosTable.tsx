import {useEffect, useRef, useState} from "react";
import type Maestro from "../../../Types/Maestro.ts";
import "datatables.net-dt/css/dataTables.dataTables.css";
import $ from "jquery";
import "datatables.net-dt";
import axios from "axios";

const MaestrosTable = () => {
    const [maestros, setMaestros] = useState<Maestro[]>([]);
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const fetchMaestros = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/uvo/maestros`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setMaestros(response.data);
        };
        fetchMaestros();
    }, []);

    useEffect(() => {
        if (maestros.length > 0 && tableRef.current) {
            $(tableRef.current).DataTable();
        }

        return () => {
            if (tableRef.current) {
                $(tableRef.current).DataTable().destroy();
            }
        };
    }, [maestros]);

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
            {maestros.map((maestro: Maestro) => (
                <tr key={maestro.id}>
                    <td>{maestro.nombre} {maestro.apellidoPaterno} {maestro.apellidoMaterno}</td>
                    <td>{maestro.edad}</td>
                    <td>{maestro.puesto}</td>
                    <td>{maestro.email}</td>
                    <td>{maestro.telefono}</td>
                    <td>{maestro.matricula}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default MaestrosTable;