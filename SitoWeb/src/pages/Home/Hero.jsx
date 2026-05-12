import React from 'react';
import { useNavigate } from 'react-router';
import herobg from "../../assets/home/hero.jpg";


const Hero = () => {
  const navigate = useNavigate();

  const section_wrapper_style = "relative w-full min-h-screen bg-cover bg-center flex items-center px-6 md:px-12 lg:px-24 py-32 sm:pt-0";
  const overlay_style = "absolute inset-0 bg-brown/45 z-[10]"; 
  const content_style = "max-w-[876px] z-[50]";

  const cta_group_style = "flex flex-wrap gap-6 mt-12 sm:mt-10";
  const button_style = "red_button"; 

  return (
    <section 
      style={{ backgroundImage: `url(${herobg})` }}
      className={section_wrapper_style}
    >
      <div className={overlay_style}></div>


      <article className={content_style}>
        <h4 className='small_heading text-white/90 mb-6'>
          VinLiber · Progetto Vite Libere
        </h4>
        
        <h1 className='big_title text-white leading-tight'>
          Dove la terra <br />
          <span className='text-green italic'>libera</span> le persone
        </h1>

        <p className='normal_paragraph text-white/90 mt-12 max-w-2xl'>
          Una cantina sociale, dodici ettari sottratti alla mafia, un vino che racconta legalità, 
          biodiversità e nuove possibilità per chi è ai margini. Dal 2008 trasformiamo la vite in un atto di libertà.
        </p>


        <div className={cta_group_style}>
          <button className={button_style} onClick={() => navigate("/adotta")}>
            Adotta una vigna <b>&rarr;</b>
          </button>

          <button className={button_style} onClick={() => navigate("/shop")}>
            Acquista vino solidale <b>&rarr;</b>
          </button>
        </div>
      </article>
    </section>
  );
};


export default Hero;