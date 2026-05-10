import React from 'react'
import { useNavigate } from 'react-router'
import logowhite from "../assets/logowhite.svg"

const Footer = () => {
    const navigate = useNavigate();


    const footerLinks = [
        { name: "Shop vini solidali", path: "/shop" },
        { name: "Adotta una vigna", path: "/adotta" },
        { name: "Esperienze", path: "/esperienze" },
        { name: "Il nostro team", path: "/team" },
        { name: "Contatti", path: "/contatti" },
        { name: "FAQ", path: "/faq" },
    ];

    return (
        <footer className='w-full bg-darkred px-6 py-16 text-white/70 lg:px-16'>
            <section className='grid gap-12 lg:grid-cols-4 lg:gap-20 max-w-7xl mx-auto'>

                <article className='lg:col-span-2'>
                    <img
                        src={logowhite}
                        alt="vitelibere logo"
                        className='h-14 w-40 object-contain cursor-pointer'
                        onClick={() => navigate("/")}
                    />

                    <p className='mt-6 max-w-md leading-relaxed text-sm lg:text-base'>
                        ViteLibere è una cantina sociale che coltiva legalità, inclusione e bellezza 
                        su terreni confiscati alla criminalità organizzata.
                        <br /><br />
                        Un progetto di agricoltura sociale che trasforma il riscatto dei beni 
                        in eccellenza enologica nel cuore della <span className='font-medium text-white'>Sicilia</span>.
                    </p>
                </article>


                <article>
                    <h4 className='text-sm font-bold uppercase tracking-widest text-white'>Esplora</h4>
                    <ul className='mt-6 space-y-4 text-sm'>
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <button 
                                    onClick={() => navigate(link.path)} 
                                    className='transition hover:text-white hover:translate-x-1 duration-300 transform inline-block'
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </article>


                <article>
                    <h4 className='text-sm font-bold uppercase tracking-widest text-white'>Sede e Contatti</h4>
                    <ul className='mt-6 space-y-4 text-sm leading-relaxed'>
                        <li>Via della Legalità, 12 <br /> 91100 Trapani (TP)</li>
                        <li className="text-white font-medium">vitelibere08@gmail.com</li>
                        <li>+39 3453 334 989</li>
                        <li className="pt-2 text-[10px] opacity-60 uppercase tracking-tighter">Lun–Ven · 09:00 – 18:00</li>
                    </ul>
                </article>

            </section>


            <article className='mt-20 border-t border-white/10 pt-8 max-w-7xl mx-auto'>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-white/40">
                    <p>© 2026 ViteLibere Soc. Coop. Agricola</p>
                    <p className="text-center md:text-right">
                        Bene confiscato alla criminalità organizzata · Progetto sostenuto da fondi UE
                    </p>
                </div>
            </article>
        </footer>
    )
}

export default Footer