import React, { useState } from 'react';
import WinesCarousel from './WinesCarousel';
import WinesNavbar from './WinesNavbar';
import datiVini from '../../data/vini.json';


const Wines = ({ currentShop, addItem }) => {
  const [activeFilter, setActiveFilter] = useState("Tutti");

  const filteredWines = activeFilter === "Tutti" 
    ? datiVini 
    : datiVini.filter(vino => vino.tipo === activeFilter);

  const wines_section_style = "w-full md:pb-24"; 

  return (
    <section className={wines_section_style}>
      <WinesNavbar 
        currentShop={currentShop} 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredCount={filteredWines.length} 
      />
      
      <div className="mt-12 md:mt-20">
        <WinesCarousel 
          wines={filteredWines} 
          currentShop={currentShop} 
          addItem={addItem} 
        />
      </div>
    </section>
  );
};


export default Wines;