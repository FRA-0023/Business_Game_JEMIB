import React from 'react';


const CartSummary = ({ currentShop, onConfirm, onEmpty }) => {
  const items = Object.values(currentShop || {});

  const totalBottles = items.reduce((acc, obj) => {
    const q = Number(obj.quantity) || 0;
    return acc + q;
  }, 0);

  const totalPrice = items.reduce((acc, obj) => {
    const p = Number(obj.item?.prezzo) || 0;
    const q = Number(obj.quantity) || 0;
    return acc + (p * q);
  }, 0);

  const rowStyle = "flex justify-between items-end w-full";

  return (
    <div className="bg-beige p-8 space-y-6 w-full">
      
      <div className={rowStyle}>
        <span className="text-brown/60 text-sm tracking-widest uppercase font-bold">Bottiglie</span>
        <span className="text-brown font-bold text-lg">{totalBottles}</span>
      </div>


      <div className={rowStyle}>
        <span className="text-darkred font-serif text-3xl italic">Totale</span>
        <span className="text-brown font-bold text-3xl">
          {totalPrice.toLocaleString('it-IT', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })} €
        </span>
      </div>


      <div className="pt-4 space-y-4">
        <button 
          onClick={onConfirm} 
          disabled={totalBottles === 0} 
          className={`red_button w-full block mx-auto max-w-96 py-4 text-lg transition-all active:scale-[0.98] ${
            totalBottles === 0 ? "opacity-40 cursor-not-allowed grayscale" : "hover:brightness-110 shadow-lg shadow-darkred/10"
          }`}
        >
          Conferma ordine
        </button>

        <button
          onClick={onEmpty}
          disabled={totalBottles === 0}
          className="w-full text-brown/40 hover:text-darkred text-[11px] tracking-[0.25em] uppercase font-black py-2 transition-colors disabled:opacity-0"
        >
          Svuota carrello
        </button>
      </div>

    </div>
  );
};


export default CartSummary;