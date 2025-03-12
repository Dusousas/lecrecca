export default function Newsletter() {
    return (
        <>
            <section className="relative">
                <div className="maxW bgName1 py-20 relative">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-BlueC opacity-70"></div>

                    <div className="py-20 relative z-10">
                        <h1 className="text-xl text-BrownD text-center mx-auto lg:max-w-[60%]">
                            Inscreva-se na nossa <span className="font-bold">newsletter</span> e receba conteúdos exclusivos sobre saúde mental e autoconhecimento!
                        </h1>

                        {/* Campo de e-mail com botão dentro */}
                        <div className="flex justify-center mt-8 w-full">
                            <div className="relative w-full lg:max-w-[40%]">
                                <input 
                                    className="border-b-2 border-BrownC outline-none w-full py-2 px-4 pr-12"
                                    placeholder="Seu e-mail"
                                    type="email"
                                />
                                <button className="absolute right-2 top-1/2 transform cursor-pointer -translate-y-1/2 bg-BrownC text-white px-4 py-1 text-sm">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
