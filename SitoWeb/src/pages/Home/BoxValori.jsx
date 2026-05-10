import React from 'react'

const BoxValori = ({ Icon, title, text }) => {
  const card_wrapper_style = "w-full xl:max-w-96 group relative";
  const card_body_style = `
    relative w-full h-full border border-brown/20 rounded-lg bg-white p-8 
    transition-all duration-300 shadow-none z-10
    lg:group-hover:shadow-[10px_20px_50px_theme(colors.darkred/40%)] 
    lg:group-hover:-translate-y-4
    active:-translate-y-4 active:shadow-[10px_20px_50px_theme(colors.darkred/40%)] 
    active:scale-[0.98] 
  `;
  const icon_style = "w-12 h-12 aspect-square object-cover shrink-0 bg-darkred/10 rounded-full p-2 flex justify-center items-center";

  return (
    <article className={card_wrapper_style}>
      <div className={card_body_style}>
        <div className="flex">
          <div className={icon_style}>
              <Icon/>
          </div>
        </div>

        <h4 className="text-darkred mt-6 small_title">
          {title}
        </h4>

        <p className="text-brown small_paragraph mt-4">
          {text}
        </p>
      </div>
    </article>
  );
};


export default BoxValori