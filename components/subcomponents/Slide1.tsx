import React from 'react';

export default function Slide1() {
    return (
        <>
            <section className='flex bgMain1 bg-center h-[100vh] lg:h-[80vh] lg:bg-contain lg:bg-right'>
                <div className='maxW flex items-center'>
                    <article className='lg:w-[60%]'>
                        <h1 className='text-5xl font-bold text-center text-white lg:text-BrownD lg:text-left'>A verdadeira transformação começa quando você cuida da sua mente e <span className='font-normal italic'>encontra a paz interior.</span></h1>
                        <p className='mt-6 text-lg text-white text-center lg:text-BrownC lg:text-left'>Acolha suas emoções, fortaleça sua mente e encontre equilíbrio no seu dia a dia.</p>
                        <div className='mt-8 flex flex-col text-center gap-4 justify-center lg:justify-start lg:flex-row lg:text-left'>
                            <a className="px-6 py-4 bg-BlueC rounded-tr-lg rounded-br-lg rounded-tl-lg text-BrownD font-semibold" href="">Fale com a psicóloga</a>
                            <a className="px-6 py-4 bg-BlueC rounded-tr-lg rounded-br-lg rounded-tl-lg text-BrownD font-semibold" href="">Nossos serviços</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}