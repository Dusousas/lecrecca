import React from 'react';

const services = [
    { title: 'Relationship', text: 'A therapy that helps establish a more profound ground for healthy relationship.', img: 'servicesimg/relationship.png' },
    { title: 'Mental Health', text: 'Taking care of your mental well-being through professional support and guidance.', img: 'servicesimg/mental.png' },
    { title: 'Feelings', text: 'Understanding and managing emotions effectively for a balanced life.', img: 'servicesimg/feelings.png' },
    { title: 'Conflicting', text: 'Resolving internal and external conflicts for a peaceful mind.', img: 'servicesimg/conflicting.png' },
    { title: 'Meditation', text: 'Practicing mindfulness and meditation to achieve mental clarity.', img: 'servicesimg/meditation.png' },
    { title: 'Depression', text: 'Helping individuals cope with and overcome depressive thoughts.', img: 'servicesimg/depression.png' },
    { title: 'Mind Games', text: 'Developing cognitive strategies to improve mental agility.', img: 'servicesimg/mind.png' },
    { title: 'Relaxation', text: 'Techniques and exercises to reduce stress and promote relaxation.', img: 'servicesimg/relaxation.png' },
    // Adicione mais itens conforme necessário
];

export default function Services() {
    return (
        <section id='services' className='py-20'>
            <div className='maxW'>
                <h1 className='text-3xl text-BrownD font-semibold uppercase text-center'>Meus serviços</h1>
                <p className='text-center mt-4 text-BrownC'>Explore nossos serviços para uma vida mais equilibrada e saudável.</p>
                
                <article className='flex flex-wrap gap-8 justify-center mt-20'>
                    {services.map((service, index) => (
                        <div key={index} className='w-[300px] flex flex-col items-center justify-center py-4 px-4 hover:shadow-lg transition'>
                            <div>
                                <img src={service.img} alt={service.title} className='w-20 h-20' />
                            </div>
                            <h1 className='text-BrownD uppercase text-lg font-semibold mt-3'>{service.title}</h1>
                            <p className='text-center mt-3 text-BrownC'>{service.text}</p>
                        </div>
                    ))}
                </article>

                <div className="mt-10 flex  text-center gap-4 justify-center ">
                  <a className="px-6 py-4 bg-BlueC rounded-tr-lg rounded-br-lg rounded-tl-lg text-BrownD uppercase" href="">Entre em contato</a>

                </div>
            </div>
        </section>
    );
}
