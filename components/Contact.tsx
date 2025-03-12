import React from 'react';


export default function Contact() {
    return (
        <section className='mt-20'>
            <div className='flex flex-col lg:flex-row'>
                {/* Horários de Funcionamento */}
                <article className='bg-[#F6F9F9] py-20 w-full flex justify-center lg:w-1/2'>
                    <div className='w-[60%]'>
                        <h1 className='text-2xl font-semibold text-GrayS text-BrownD'>
                            Locais de <span className='text-BrownC'>atendimento</span>
                        </h1>
                        <ul className='mt-5 space-y-2 text-gray-600'>
                            {[
                                { day: 'Torrinha', hours: 'Rua Torrinha, 245' },
                                { day: 'Brotas', hours: 'Rua Torrinha, 245' },
                                { day: 'São Carlos', hours: 'Rua Torrinha, 245' },
 
                    
                            ].map((item, index) => (
                                <li key={index} className='flex justify-between border-b pb-1'>
                                    <span className='font-semibold'>{item.day} :</span>
                                    <span className={''}>{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>

                {/* Formulário */}
                <article className='bg-BlueC py-20 w-full flex justify-center lg:w-1/2'>
                    <div className='w-[60%]'>
                        <h1 className='text-2xl font-semibold text-GrayS text-BrownC'>
                            Faça uma avaliação <span className=''> gratuita</span>
                        </h1>
                        <form className='mt-5 space-y-4'>
                            <input type='text' placeholder='Seu nome' className='border-b-2 border-BrownD bg-transparent border-BlueP p-2 w-full outline-none' />
                            <input type='text' placeholder='Seu telefone' className='border-b-2 bg-transparent border-BrownD border-BlueP p-2 w-full outline-none' />


                            <textarea placeholder='Sua mensagem' rows={3} className='w-full border-b-2 border-BrownD bg-transparent outline-none border-BlueP resize-none p-2' name="" id=""></textarea>

                            <button className='border-2 cursor-pointer border-GrayS px-5 py-2 mt-4 uppercase'>
                                Ver disponibilidade
                            </button>
                        </form>
                    </div>
                </article>
            </div>
        </section>
    );
}
