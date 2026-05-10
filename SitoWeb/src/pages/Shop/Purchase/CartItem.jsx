import React from 'react';


const CartItem = ({ data, quantity, onAdd, onRemove, onDelete }) => {
  const btnCircle = "w-12 h-12 rounded-full border border-brown/20 flex items-center justify-center text-brown hover:bg-brown/5 transition-all active:scale-95";
  const textLabel = "text-brown/60 text-sm tracking-[0.15em] uppercase font-bold";

  return (
    <div className="bg-beige p-8 border-b border-brown/10 w-full min-w-0 transition-all hover:bg-brown/[0.02]">
      
      <div className="flex justify-between items-baseline gap-4 mb-2">
        <h3 className="text-darkred font-serif text-2xl lg:text-3xl leading-tight truncate">
          {data.nome}
        </h3>


        <span className="text-brown font-semibold text-xl lg:text-2xl whitespace-nowrap">
          {data.prezzo} €
        </span>
      </div>


      <div className={`${textLabel} mb-10`}>
        {data.tipo === "W" ? "Vino Bianco" : "Vino Rosso"}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <button 
            onClick={onRemove} 
            className={btnCircle}
            aria-label="Rimuovi uno"
          >
            <span className="text-2xl">−</span>
          </button>

          <span className="text-brown font-bold text-2xl min-w-[2rem] text-center">
            {quantity}
          </span>

          <button 
            onClick={onAdd} 
            className={btnCircle}
            aria-label="Aggiungi uno"
          >
            <span className="text-2xl">+</span>
          </button>
        </div>

        <button 
          onClick={onDelete}
          className="text-brown/40 hover:text-darkred transition-colors p-3 hover:bg-darkred/5 rounded-xl"
          aria-label="Elimina prodotto"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};


export default CartItem;