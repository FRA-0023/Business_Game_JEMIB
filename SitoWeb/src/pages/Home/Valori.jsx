import React from 'react';
import BoxValori from './BoxValori';
import { Biologico, Inclusione, Legalità, Rigenerazione } from '../../assets/home/iconevalori';


const Valori = () => {
  const section_style = "w-full py-28 md:py-32 bg-beige px-6 md:px-12 lg:px-24";
  const header_wrapper_style = "max-w-[700px]";
  const grid_wrapper_style = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20 lg:mt-16";

  const valori = [
    {
      id: 1,
      icon: Legalità,
      title: "Legalità",
      text: "Restituiamo alla collettività terreni sottratti alla criminalità, trasformandoli in cantieri di giustizia visibile."
    },
    {
      id: 2,
      icon: Biologico,
      title: "Biologico certificato",
      text: "Coltivazione senza chimica di sintesi, biodiversità protetta, suolo vivo. Da quindici anni, ogni vendemmia."
    },
    {
      id: 3,
      icon: Inclusione,
      title: "Inclusione sociale",
      text: "Lavoro vero per persone in condizioni di fragilità: tirocini, formazione enologica, percorsi di autonomia."
    },
    {
      id: 4,
      icon: Rigenerazione,
      title: "Rigenerazione",
      text: "Vigneti, oliveti e seminativi che rimettono in moto economia, paesaggio e comunità del territorio."
    }
  ];

  return (
    <section className={section_style}>
      <article className={header_wrapper_style}>
        <h4 className='small_heading text-darkred'>
          I nostri valori valori
        </h4>

        <h2 className='title text-brown mt-6'>
          I valori che fanno crescere il nostro progetto
        </h2>
      </article>

      <div className={grid_wrapper_style}>
        {valori.map((item) => (
          <BoxValori 
            key={item.id} 
            Icon={item.icon} 
            title={item.title} 
            text={item.text} 
          />
        ))}
      </div>
    </section>
  );
};


export default Valori;