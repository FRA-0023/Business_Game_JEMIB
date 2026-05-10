import React, { useState } from "react";

const WineCard = ({ data = {}, currentShop, addItem }) => {
  const currentFilter = useState(null);

  const { id, nome, tipo, prezzo, descrizione, src } = data;

  const [isHovering, setIsHovering] = useState(false);

  const link_style = `text-serif mt-1 duration-300 inline-block relative group
        ${isHovering ? "text-darkred scale-[1.02]" : "text-brown scale-100"}`;

  const link_underline_style = `absolute -bottom-1 left-0 h-px bg-darkred duration-300 
            ${isHovering ? "w-full" : "w-0"}`;

  return (
    <article className="relative">
      <div
        className={`absolute left-3 top-3 py-1.5 px-5 z-10 small_heading ${tipo == "W" ? "bg-white text-darkred" : "bg-darkred text-white"}`}
      >
        {tipo == "W" ? "Bianco" : "Rosso"}
      </div>

      <div className="aspect-[4/5] bg-white w-full overflow-hidden relative">
        <ul
          className={`w-full h-full absolute bg-brown/95 duration-300
                        p-6 ${isHovering ? "opacity-100 z-[60]" : "opacity-0 z-0 pointer-events-none"}`}
        >
          <p className="text-beige font-medium">{descrizione}</p>
        </ul>

        <img
          src={src}
          alt="wine-img"
          className="w-full h-full hover:scale-105 duration-500 z-[10]"
        />
      </div>

      <h4 className="text-darkred text-2xl font-serif font-light mt-4">
        {nome}
      </h4>

      <div className={link_style}>
        <p
          className="relative w-max"
          onMouseOver={() => {
            setIsHovering(true);
          }}
          onMouseOut={() => {
            setIsHovering(false);
          }}
          onTouchStart={() => {
            setIsHovering(true);
          }}
          onTouchEnd={() => {
            setIsHovering(false);
          }}
        >
          Descrizione ⟶<span className={link_underline_style}></span>
        </p>
      </div>

      <p className="big_text text-brown">€{prezzo}</p>

      <button
        className="red_button_sm mt-3"
        onClick={() => {
          addItem(data);
        }}
      >
        Aggiungi al carrello
      </button>
    </article>
  );
};

export default WineCard;
