import Header from "../../components/Header/Header.tsx";

const Carreras = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen p-10">
            <Header />
        <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="font-black text-8xl">Página de carreras</h1>
            <p className="font-medium text-lg my-5">Esta es la página de carreras ofrecidas en la universidad</p>
            <label>Credenciales:</label>

        </div>
        </div>
        </>
    );
};

export default Carreras;