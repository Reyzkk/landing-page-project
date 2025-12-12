import ImagePlane from "../../assets/icons/airplane.png";
import Button from "./ui/button"

function Main() {
    return (
        /*Hero Section*/
        <main id="" className="bg-white min-h-[95vh] overflow-x-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-8">
                <div className="flex flex-col gap-4 md:w-1/2">
                    <h1 className="page-animate poppins text-6xl font-bold text-shadow-2xl text-blue-400 pb-6">Sua viagem com mais <span className="text-black">segurança.</span></h1>
                    <p className="page-animate tracking-wide nunito font-semibold text-2xl ">
                        Aproveite ofertas exclusivas e garanta passagens pelo melhor preço.
                        Com apenas alguns cliques, você organiza toda a sua viagem e ainda recebe dicas de destinos imperdíveis.
                        Voe com confiança e tranquilidade.
                    </p>
                    <Button className="poppins font-bold page-animate" variant="primary">Começar</Button>

                </div>
                {/*Imagem*/}
                <img className="page-animate" src={ImagePlane} alt="Imagem de um avião dando a volta na terra" />
            </div>
        </main>
    );
}

export default Main