import IconPlane from "../../../src/assets/icons/plane.png";
import Button from "./ui/button";
import Links from "./ui/links";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white-800 p-2 shadow-2xs">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/*Title and Icon*/}
                <div className="text-2xl flex gap-3">
                    <img className="page-animate h-10 w-10" src={IconPlane} alt="Icon" />
                    <h1 className="page-animate poppins text-3xl font-bold text-black-50 text-shadow-2xl text-shadow-2xs">
                        Horizon <span className="text-blue-400">Trips </span>
                    </h1>
                </div>

                {/*Navegation Pc*/}
                <nav className="inter md:flex hidden items-center gap-3 list-none text-black-50 font-semibold">
                    <Links href="#home" variant="primary">Consultar</Links>
                    <Links href="#projects" variant="primary">Agendar</Links>
                    <Links href="#contact" variant="primary">Sobre</Links>

                    {/*Theme*/}
                    <Button className="page-animate" variant="secondary">Entre em Contato</Button>
                </nav>

                {/*Navegation Mobile Icon*/}
                <div className="block md:hidden">
                    <Bars3Icon
                        className="h-6 w-6 text-black cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </div>

            {/*Menu Mobile com Transição*/}
            <nav
                className={`md:hidden bg-white-200 p-4 flex flex-col gap-3 text-black-50 font-semibold
          transition-all duration-300 ease-in-out inter  backdrop-blur-md shadow-2xl overflow-hidden 
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 "}`}
            >
                <Links href="#home" variant="primary" onClick={() => setIsMenuOpen(false)}>Home</Links>
                <Links href="#projects" variant="primary" onClick={() => setIsMenuOpen(false)}>Projects</Links>
                <Links href="#contact" variant="primary" onClick={() => setIsMenuOpen(false)}>Contact</Links>
                <Button variant="secondary">Entre em Contato</Button>
            </nav>
        </header>
    );
}

export default Header;
