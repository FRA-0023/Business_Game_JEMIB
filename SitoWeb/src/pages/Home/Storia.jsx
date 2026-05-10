import React from 'react';
import uva from "../../assets/home/uva.jpg"

const Storia = () => {
  const container_section = "w-full py-20 md:py-32 bg-darkbeige px-6 md:px-12 lg:px-12 xl:px-28 lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center";
  const image_wrapper = "w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/5] xl:aspect-square relative";
  const floating_box = "bg-red text-white absolute mx-auto left-0 right-0 py-8 px-6 -bottom-16 md:-bottom-12 lg:-bottom-16 lg:-right-12 lg:left-auto w-[85%] md:w-2/3 lg:w-80 shadow-xl"; 
  const text_content_wrapper = "mt-32 lg:mt-0";
  const quote_text = "text-[clamp(1.25rem,3vw,2rem)] leading-tight font-serif italic";

  return (
    <section className={container_section}>
        
      <article className={image_wrapper}>
        <img 
          src={uva} 
          alt="Storia Vite Libere" 
          className='w-full h-full bg-beige object-cover shadow-lg brightness-80'
        />
            
        <div className={floating_box}>
          <h4 className={quote_text}>
            «Coltivare è un atto politico.»
          </h4>

          <h5 className='small_heading text-white/80 mt-4'>
            Dal manifesto Vite Libere
          </h5>
        </div>
      </article>


      <article className={text_content_wrapper}>
        <h4 className='small_heading text-darkred'>
          La storia
        </h4>

        <h2 className='title text-brown mt-8'>
          Dalle colline di Toscana alla terra confiscata in Sicilia
        </h2>

        <div className='normal_paragraph text-brown mt-10 space-y-6'>
          <p>
            Tutto è iniziato nel 2008, in una piccola cantina tra Siena e Grosseto, con una manciata di soci e un'idea semplice: 
            il vino può essere giusto. Giusto verso la terra, verso le persone, verso chi lo beve.
          </p>
          <p>
            Nel 2024, grazie a un finanziamento pubblico da 1.000.000 €, abbiamo vinto il bando per la
            gestione di un bene confiscato alla criminalità organizzata: dodici ettari nel cuore del trapanese, 
            che oggi tornano a vivere come vigneto biologico, frantoio didattico e luogo di inclusione lavorativa.
          </p>
        </div>
      </article>

    </section>
  );
};

export default Storia;