import React from 'react';


const Manifesto = () => {
  const section_style = "w-full py-28 md:py-40 px-6 md:px-12 lg:px-24 bg-beige";
  const container_style = "mx-auto max-w-6xl";
  const heading_style = "small_heading text-center text-darkred/90";
  const title_style = "title text-center text-brown mt-8 max-w-5xl mx-auto";
  const text_style = "normal_paragraph text-center text-brown mt-10 px-4 lg:px-8 max-w-4xl mx-auto text-balance";

  return (
    <section className={section_style}>
      <article className={container_style}>
        <h4 className={heading_style}>
          Il nostro manifesto
        </h4>


        <h2 className={title_style}>
          Crediamo che un grappolo <br /> possa contenere <br /> <span className='text-red italic'>giustizia</span>,  
          <span className='text-darkred italic'> bellezza</span> e <span className='text-green italic'>futuro</span>
        </h2>


        <p className={text_style}>
          VinLiber nasce nel 2008 come cantina sociale tra Siena e Grosseto. Oggi, con il progetto Vite Libere, 
          portiamo la nostra esperienza su un bene confiscato in provincia di Trapani: 
          dodici ettari restituiti alla collettività, coltivati con metodo biologico insieme a persone in situazione di fragilità.
        </p>
      </article>
    </section>
  );
};


export default Manifesto;