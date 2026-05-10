import React from 'react';
import Hero from './Hero';
import Manifesto from './Manifesto';
import Storia from './Storia';
import Valori from './Valori';
import Confisca from './Confisca';
import Progetti from './Progetti';


const Home = () => {
  const home_section_style = "w-full bg-white"; 

  return (
    <section className={home_section_style}>
      <Hero />
      <Manifesto />
      <Storia />
      <Valori />
      <Confisca />
      <Progetti />
    </section>
  );
};


export default Home;