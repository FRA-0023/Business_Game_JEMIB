import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useNavigate } from "react-router";
import { create_ecommerce_checkout } from "../../../api/stripe/ecommerce";
import Spinner from "../../../components/Spinner";

const Purchase = () => {
  const back_button_style =
    "flex gap-2 text-lg cursor-pointer hover:brightness-120 hover:scale-[1.02] duration-300";
  const navigate = useNavigate();

  const [currentShop, setCurrentShop] = useState(
    JSON.parse(localStorage.getItem("currentShop")) || {},
  );

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("currentShop", JSON.stringify(currentShop));
  }, [currentShop]);

  const updateQuantity = (id, delta) => {
    setCurrentShop((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: Math.max(1, prev[id].quantity + delta),
        },
      };
    });
  };

  const removeItem = (id) => {
    setCurrentShop((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  };

  const emptyCart = () => {
    setCurrentShop({});
  };

  const goPayment = async () => {
    const obj = Object.values(currentShop).map((productWrapper) => {
      return {
        price: productWrapper.item.price_id,
        quantity: productWrapper.quantity,
      };
    });

    try {
      setIsLoading(true);
      const res = await create_ecommerce_checkout(obj);

      window.location.href = res.url;
      emptyCart();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Errore durante il checkout", err);
      setErrorMessage(
        "Errore durante il checkout; prova a ricaricare la pagina.\nSe il problema persiste, non esitare a contattarci",
      );

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const addQuantity = (id) => updateQuantity(id, 1);
  const subQuantity = (id) => updateQuantity(id, -1);

  return (
    <section className="bg-beige px-6">
      <article className="max-w-[768px] mx-auto min-h-screen h-full py-32">
        <span
          className={back_button_style}
          onClick={() => {
            navigate("/shop");
          }}
        >
          <p>←</p>
          <p className="underline text-brown">Indietro</p>
        </span>

        <h2 className="title text-darkred">Il tuo carrello</h2>

        <article className="flex flex-col gap-4 h-full justify-between">
          <article>
            {Object.values(currentShop).map((obj) => (
              <CartItem
                key={obj.item.id}
                quantity={obj.quantity}
                data={obj.item}
                onAdd={() => {
                  addQuantity(obj.item.id);
                }}
                onRemove={() => {
                  subQuantity(obj.item.id);
                }}
                onDelete={() => {
                  removeItem(obj.item.id);
                }}
              />
            ))}
          </article>
          <CartSummary
            currentShop={currentShop}
            onEmpty={() => {
              emptyCart();
            }}
            onConfirm={() => {
              goPayment();
            }}
          />
        </article>

        <article>
          {errorMessage != "" && (
            <p className="mx-auto mb-4 small_paragraph text-darkred bg-darkred/5 border border-darkred/20 rounded-md px-4 py-2 text-center max-w-prose whitespace-pre-line font-medium">
              {errorMessage}
            </p>
          )}
          {isLoading && <Spinner size="w-12 h-12" />}
        </article>
      </article>
    </section>
  );
};

export default Purchase;
