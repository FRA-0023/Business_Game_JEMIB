import React from 'react';
import WineCard from './WineCard';


const WinesCarousel = ({ wines, currentShop, addItem }) => {
  
  const listaVini = wines || [];

  const grid_style = `
    relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    gap-24 md:gap-8 lg:gap-8 xl:gap-16 
    pt-16 px-6 sm:px-12 md:px-12 lg:px-24 xl:px-32
  `;

  return (
    <section className={grid_style}>
      {listaVini.length > 0 ? (
        listaVini.map((item) => (
          <WineCard 
            key={item.id} 
            data={item} 
            currentShop={currentShop} 
            addItem={addItem} 
          />
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <p className="normal_paragraph text-brown/50 italic">
            Nessun vino trovato per questa categoria.
          </p>
        </div>
      )}
    </section>
  );
};


export default WinesCarousel;