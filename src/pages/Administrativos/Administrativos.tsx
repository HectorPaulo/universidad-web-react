import Header from "../../components/Header/Header"
import AdministrativosTable from "../../components/Tables/Administrativos/AdministrativosTable";

const Administrativos = () => {
    return ( 
        <>
            <div className="flex flex-col min-h-screen p-10">
                <Header />     
                <div className="flex flex-col items-center justify-center flex-grow">
                    <h1 className="font-black text-8xl">Página de administrativos</h1>
                    <p className="font-medium text-lg my-5">Esta es la página de administrativos de la universidad del valle de oaxaca</p>
                </div>
                <div className="p-10 w-2/3 mx-auto">
                    <AdministrativosTable />
                </div>
            </div>
        </>
    );
};

export default Administrativos;