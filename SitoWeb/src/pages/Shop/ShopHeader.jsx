import React from 'react';


const ShopHeader = () => {
  const section_style = "py-32 px-6 md:px-12 lg:px-24 xl:px-28";
  const content_wrapper_style = "md:max-w-[728px] lg:max-w-none lg:w-2/3 xl:w-1/2";
  const heading_style = "small_heading text-darkred";
  const title_style = "title text-brown mt-6";
  const text_style = "normal_paragraph text-brown mt-6 md:mt-10 max-w-2xl";

  return (
    <section className={section_style}>
        
      <article className={content_wrapper_style}>
        <h4 className={heading_style}>
          Catalogo solidale
        </h4>
        
        <h2 className={title_style}>
          I nostri vini biologici, in trasparenza
        </h2>

        <p className={text_style}>
          Le schede tecniche dei vini Vite Libere: rossi e bianchi della tradizione italiana, 
          ognuno raccontato dai parametri reali della sua vinificazione. Nessuna scorciatoia, nessuna invenzione.
        </p>
      </article>
    </section>
  );
};


export default ShopHeader;