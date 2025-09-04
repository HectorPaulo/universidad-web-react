import Header from "../../components/Header/Header.tsx";
import AlumnosTable from "../../components/Tables/Alumnos/AlumnosTable.tsx";

const Alumnos = () => {
    
    return (
        <>
            <div className="flex flex-col min-h-screen p-10">
            <Header />
                <div className="flex flex-col items-center justify-center flex-grow">
                    <h1 className="font-black text-8xl">Página de alumnos</h1>
                    <p className="font-medium text-lg my-5">Esta es la página de alumnos de la universidad</p>
                </div>
                <div className="p-10 w-2/3 mx-auto">
                    <AlumnosTable />
                </div>
            </div>
        </>
    );
};

export default Alumnos;