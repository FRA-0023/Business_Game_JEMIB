import React from 'react';
import { useNavigate } from 'react-router';


const Esperienze = () => {
  const navigate = useNavigate();

  const box_container_style = `
    relative w-full h-full p-8 z-10 cursor-pointer
    bg-white border border-brown/25 rounded-lg 
    transition-all duration-500 shadow-none 
    group-hover:-translate-y-6
    group-hover:shadow-[10px_20px_50px_rgba(114,33,33,0.3)]
    flex flex-col justify-between
  `;

  const experiences = [
    {
      title: "Enoturismo Solidale",
      desc: "Visite guidate in cantina con degustazione, racconto del progetto sociale e incontro con i lavoratori e i tutor.",
      price: "€50 – 70",
      unit: "persona",
      tag: "Visite"
    },
    {
      title: "Vendemmia Aperta",
      desc: "Eventi durante la vendemmia (sett–ott) con laboratori, pranzo in vigna e acquisto diretto dei frutti del nostro lavoro.",
      price: "€80",
      unit: "persona",
      tag: "Stagionale"
    },
    {
      title: "Box Regalo Solidale",
      desc: "Cofanetti da 2–3 bottiglie con la storia del progetto e certificato di impatto sociale. Ideale per occasioni speciali.",
      price: "€35 – 55",
      unit: "box",
      tag: "Regalo"
    },
    {
      title: "Partnership Etiche",
      desc: "Forniture dedicate a botteghe equosolidali, Slow Food e ristoranti etici con materiale narrativo co-brandizzato.",
      price: "Da definire",
      unit: "B2B",
      tag: "Business"
    }
  ];

  return (
    <div className="min-h-screen bg-beige pt-32 pb-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-24 text-center">
          <h1 className="text-darkred font-serif text-5xl md:text-6xl italic mb-6">Esperienze</h1>
          <p className="max-w-2xl mx-auto text-brown/70 leading-relaxed italic text-lg">
            "Il valore del nostro vino risiede nella possibilità di contribuire a un’iniziativa 
            concreta di inclusione sociale e promozione della legalità."
          </p>
        </header>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {experiences.map((exp, i) => (
            <div key={i} className="group relative h-full">
              <div className={box_container_style}>
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase tracking-widest text-darkred font-black py-1.5 px-4 border border-darkred/20 rounded-full bg-darkred/5">
                      {exp.tag}
                    </span>
                    <div className="text-brown/20 font-serif italic text-5xl select-none">0{i + 1}</div>
                  </div>
                  
                  <h3 className="text-brown text-3xl md:text-4xl font-serif mb-4 group-hover:text-darkred transition-colors duration-500 leading-tight">
                    {exp.title}
                  </h3>
                  
                  <p className="text-brown/60 text-base leading-relaxed mb-8">
                    {exp.desc}
                  </p>
                </div>

                <div className="pt-8 border-t border-brown/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brown/40 mb-1 font-bold">Prezzo stimato</p>
                    <p className="text-brown font-serif text-2xl italic">
                      {exp.price} <span className="text-xs not-italic text-brown/40">/ {exp.unit}</span>
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => { navigate('/prenota-esperienze', { state: { selectedExperience: exp.title } }) }}
                    className="red_button px-8 py-3.5 text-[10px] tracking-widest active:scale-90 transition-all shadow-lg shadow-darkred/10"
                  >
                    PRENOTA ORA
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};


export default Esperienze;