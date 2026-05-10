import React from "react";
import cart from "../../assets/shoppingcart.svg";
import { useNavigate } from "react-router";

const WinesNavbar = ({
  currentShop,
  activeFilter,
  setActiveFilter,
  filteredCount,
}) => {
  const navigate = useNavigate();

  const tipologie = [
    { id: 1, name: "Tutti", value: "Tutti" },
    { id: 2, name: "Rossi", value: "R" },
    { id: 3, name: "Bianchi", value: "W" },
  ];

  const cartItemsCount = Object.values(currentShop || {}).reduce((acc, obj) => {
    return acc + (obj?.quantity || 0);
  }, 0);

  const nav_wrapper_style =
    "sticky top-18 z-[90] w-full border-y border-brown/20 bg-white/95 backdrop-blur-md flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-6 px-6 md:px-12 lg:px-24";

  const cart_btn_style =
    "relative py-2.5 px-5 bg-darkred rounded-full flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all duration-300 shadow-sm hover:scale-105";

  return (
    <nav className={nav_wrapper_style}>
      <article className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
        <h3 className="small_heading text-brown/60 text-sm">Tipologia</h3>

        <ul className="flex gap-3">
          {tipologie.map((item) => {
            const isActive = activeFilter === item.value;

            return (
              <button
                key={item.id}
                onClick={() => setActiveFilter(item.value)}
                className={`
                  small_paragraph py-1.5 px-6 border rounded-full transition-all duration-300 active:scale-95
                  ${
                    isActive
                      ? "bg-darkred text-white border-darkred shadow-md"
                      : "bg-transparent text-brown border-brown/40 hover:border-darkred hover:text-darkred"
                  }
                `}
              >
                {item.name}
              </button>
            );
          })}
        </ul>
      </article>

      <div className="mt-6 sm:mt-0 flex gap-6 items-center justify-between sm:justify-end border-t border-brown/10 pt-4 sm:pt-0 sm:border-none">
        <h3 className="small_heading text-brown/60 text-sm">
          {filteredCount} Vini disponibili
        </h3>

        <button
          className={cart_btn_style}
          onClick={() => navigate("/purchase")}
        >
          <img
            src={cart}
            alt="Carrello"
            className="h-5 w-5 brightness-0 invert"
          />

          <div className="min-w-[24px] h-6 px-1.5 rounded-full bg-white text-darkred text-xs font-bold flex items-center justify-center">
            {cartItemsCount}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default WinesNavbar;
