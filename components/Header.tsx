import Navbar from "./subcomponents/Navbar";
import Socialmedia from "./subcomponents/Socialmedia";

export default function Header() {
    return (
        <>
            <Socialmedia />
            <header className='py-2 shadow-md relative'>
                <div className='maxW flex items-center justify-between'>
                    <div className="z-50">
                        <a href="/"><img className="w-[160px] object-cover" src="logo.png" alt="" /></a>
                    </div>

                    <Navbar />
                </div>
            </header>
        </>
    );
}