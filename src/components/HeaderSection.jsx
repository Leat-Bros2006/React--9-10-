import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function HeaderSection() {

    const sections = ["ABOUT", "SKILLS", "COURSES", "PROJECTS", "CONTACT"];
    const [isActive, setIsActive] = useState(false)

    function openNavbar() {
        setIsActive(true)
    }

    function closeNavbar() {
        setIsActive(false)
    }

    return (
        <>
            <header className="h-16 sticky top-0 bg-[#0d0f14] z-10 flex items-center justify-between shadow border-b border-muted px-5">
                <h2 className="hidden md:block text-accent font-bold ">L.B</h2>
                <h2
                    onClick={openNavbar}
                    className="text-white cursor-pointer block md:hidden">
                    <Menu />
                </h2>
                <nav className="hidden md:flex items-center gap-4 justify-center w-full">
                    {sections.map((se, index) => <a key={index} className="text-muted text-sm hover:text-accent transition-color duration-300"
                        href="#">{se}</a>)}
                </nav>
                <button className="btn btn-sm btn-outline btn-primary">
                    Toogle
                </button>
            </header>

            <article className={`${isActive ? "left-0" : "-left-full"} min-h-screen w-[300px] bg-slate-950 text-white top-0 fixed z-20 transition-all duration-300`}>
                <div className="border-b border-b-white p-4 flex justify-end">
                    <button
                        onClick={closeNavbar}
                        className="p-3 rounded-full hover:bg-white/20 border border-white cursor-pointer">
                        <X />
                    </button>
                </div>
                <nav className="flex flex-col p-4">
                    {sections.map((se, index) => <a key={index} className="hover:bg-white/20 px-3 py-2 rounded text-muted text-sm transition-color duration-300"
                        href="#">{se}</a>)}
                </nav>
            </article>
        </>
    );
}
