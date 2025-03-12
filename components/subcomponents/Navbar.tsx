import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Desabilitar rolagem quando o menu estiver aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Desabilitar rolagem
        } else {
            document.body.style.overflow = 'auto'; // Habilitar rolagem
        }

        return () => {
            document.body.style.overflow = 'auto'; // Garantir que a rolagem seja habilitada ao desmontar o componente
        };
    }, [isOpen]);

    return (
        <>
            {/* DESKTOP */}
            <nav>
                <ul className="hidden gap-6 uppercase text-BlueC  justify-center items-center text-lg lg:flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>

            {/* MOBILE */}
            <nav className="lg:hidden relative">
                <div className="flex justify-center items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className=" text-BlueC text-2xl focus:outline-none z-50">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </button>
                </div>

                <ul className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed gap-y-8  top-0 right-0 w-full h-full bg-white text-lg shadow-md uppercase p-4  text-BlueC transition-transform duration-300 overflow-hidden z-40 flex flex-col items-center justify-center`}>
                    <li className=""><a href="/">Home</a></li>
                    <li className=""><a href="#about">Sobre mim</a></li>
                    <li className=""><a href="#services">Serviços</a></li>
                    <li className=""><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </>
    );
}
