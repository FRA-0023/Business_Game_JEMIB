import React from 'react';
import BoxConfisca from './Components/BoxConfisca';


const Confisca = () => {
  const section_style = "w-full py-28 md:py-40 bg-darkred px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-16 lg:gap-32 items-center";
  const stats_grid_style = "grid grid-cols-2 gap-x-8 lg:gap-x-12";
  const text_content_style = "max-w-xl";

  const confische = [
    { id: 1, title: "12", text: "ettari coltivati" },
    { id: 2, title: "1M€", text: "fondi pubblici" },
    { id: 3, title: "15+", text: "anni di esperienza" },
    { id: 4, title: "100%", text: "biologico certificato" },
  ];

  return (
    <section className={section_style}>
      <article className={text_content_style}>
        <h3 className='small_heading text-white'>
          Il bene confiscato
        </h3>

        <h2 className='title text-white mt-8'>
          Dodici ettari restituiti alla luce
        </h2>

        <p className='normal_paragraph text-white/90 mt-10'>
          Erano terre del silenzio, della paura, dell'omertà. Oggi sono filari di nero d'Avola e grillo, 
          sentieri didattici, un casolare che torna ad essere casa per chi sceglie di ricominciare.
        </p>
      </article>


      <article className={stats_grid_style}>
        {confische.map((item) => (
          <BoxConfisca key={item.id} title={item.title} text={item.text} />
        ))}
      </article>
    </section>
  );
};


export default Confisca;