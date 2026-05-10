import React from 'react';
import { useOutletContext } from 'react-router';


const section_style = "flex flex-col items-center px-4 text-center";
const icon_container = "w-20 h-20 bg-darkred rounded-full flex items-center justify-center mb-10 shadow-lg";
const card_style = `
  w-full max-w-3xl bg-beige border border-brown/10 rounded-lg p-12 shadow-lg
  text-left relative overflow-hidden duration-300 z-10
  lg:hover:shadow-[10px_20px_50px_theme(colors.darkred/40%)] 
  lg:hover:-translate-y-4
  active:-translate-y-4 active:shadow-[10px_20px_50px_theme(colors.darkred/40%)] 
  active:scale-[0.98] 
`;


const Certificato = () => {
  const { data } = useOutletContext();

  return (
    <section>
      <div className={section_style}>
        
        <div className={icon_container}>
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>


        <h1 className="text-brown text-5xl font-serif font-light mb-6 max-w-5xl leading-tight">
          Benvenuto nella famiglia di Vite Libere.
        </h1>


        <p className="text-brown font-light text-lg lg:text-xl max-w-2xl mb-16 leading-relaxed">
          La tua adozione è stata confermata. Riceverai un'email di conferma entro pochi minuti.
        </p>


        <div className={card_style}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-darkred/60 text-[10px] tracking-[0.2em] uppercase font-bold">
              Certificato di adozione
            </span>
            <span className="text-darkred font-serif text-xl italic">
              Vitelibere
            </span>
          </div>

          <div className="border-b border-brown/10 mb-10"></div>

          <div className="space-y-6">
            <h2 className="text-darkred text-4xl font-serif">
              {data.nome || "Nome Adottante"}
            </h2>

            <p className="text-brown/80 text-lg leading-relaxed">
              ha adottato una vigna di livello{" "}
              <span className="font-bold text-brown">{data.livello || "Vigna"}</span> 
              {" "}sul bene confiscato di Vite Libere — Trapani.
            </p>

            {data.dedica && (
              <div className="border-l-2 border-brown/20 pl-6 py-1 italic text-brown/60 text-xl font-serif">
                <div className="flex items-center w-full min-w-0">
                  <span className="flex-none mr-1">«</span>
                  <span className="truncate flex-1">
                    {data.dedica}
                  </span>
                  <span className="flex-none ml-1">»</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-end mt-16 text-[11px] tracking-wider uppercase font-medium">
            <span className="text-brown/50">Vendemmia 2026</span>
            <span className="text-darkred/70 italic normal-case font-serif text-sm">
              Vite Libere Soc. Coop.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};


export default Certificato;