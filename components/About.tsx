import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function About() {
    return (
        <>
            <section id='about' className='py-20 bgAbout bg-gray-50'>
                <div className='maxW flex flex-col gap-10 lg:flex-row'>


                    <article className='lg:w-1/2'>
                        <img className='rounded-tr-4xl rounded-br-4xl rounded-tl-4xl' src="about-1.jpg" alt="" />
                    </article>

                    <article className='lg:w-1/2'>
                        <h1 className='text-3xl text-BrownD font-semibold uppercase'>Sobre mim</h1>
                        <div className='bgName py-10 px-8 mt-6 flex justify-between items-center gap-4'>
                            <h1 className='text-2xl text-BrownD font-semibold drop-shadow-[2px_2px_0px_white]'>Letícia Crecca</h1>
                            {/* BORDA PISCANDO */}
                            <button className="w-14 h-14 flex items-center justify-center cursor-pointer bg-white bg-opacity-80 rounded-full border-4 border-white shadow-lg hover:bg-opacity-100 transition">
                                <svg className="w-10 h-10 text-BrownD" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                                </svg>
                            </button>
                        </div>
                        <p className='mt-6 text-BrownC lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis quas fugit doloremque odio aut odit, nobis, voluptas cum voluptatibus impedit! Sed doloribus ipsum corporis autem sit maxime ullam. Culpa exercitationem ullam tempora rem eius dolores praesentium cum ipsam architecto?</p>
                        <p className='mt-3 text-BrownC lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis quas fugit doloremque odio aut odit, nobis, voluptas cum voluptatibus impedit! Sed doloribus ipsum corporis autem sit maxime ullam.</p>

                        <article className='flex mt-6 justify-center items-center space-x-4 text-BrownC lg:justify-normal'>
                            <span className="border-l h-5 border-BrownC"></span>
                            <a href="#" className="hover:text-BlueC"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <span className="border-l h-5 border-BrownC"></span>
                            <a href="#" className="hover:text-BlueC"><FontAwesomeIcon icon={faTwitter} /></a>
                            <span className="border-l h-5 border-BrownC"></span>
                            <a href="#" className="hover:text-BlueC"><FontAwesomeIcon icon={faInstagram} /></a>
                            <span className="border-l h-5 border-BrownC"></span>
                            <a href="#" className="hover:text-BlueC"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </article>

                        <article className='flex flex-col mt-8 gap-x-14 gap-y-4 lg:flex-row'>
                            <div className='bg-white py-4 rounded-xl px-10 shadow-lg flex gap-2 items-center'>
                                <div>
                                    <FontAwesomeIcon className='text-4xl bg-BlueC text-white py-4 px-4 rounded-2xl' icon={faTrophy} />
                                </div>
                                <div>
                                    <h1 className='font-semibold text-BrownD uppercase lg:text-xl '>4+ Anos</h1>
                                    <p className='text-BrownC uppercase text-sm'>Experiência</p>
                                </div>
                            </div>
                            <div className='bg-white py-4 rounded-xl px-10 shadow-lg  flex gap-2 items-center'>
                                <div>
                                    <FontAwesomeIcon className='text-4xl bg-BlueC text-white py-4 px-4 rounded-2xl' icon={faTrophy} />
                                </div>
                                <div>
                                    <h1 className='font-semibold text-BrownD uppercase lg:text-xl '>1K+ Felizes</h1>
                                    <p className='text-BrownC uppercase text-sm'>clientes</p>
                                </div>
                            </div>
                        </article>
                    </article>
                </div>
            </section>
        </>
    );
}
