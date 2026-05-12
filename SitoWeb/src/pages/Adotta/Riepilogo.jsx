import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import CardRiepilogo from "./Components/CardRiepilogo";
import TestoRiepilogo from "./Components/TestoRiepilogo";
import adottapiani from "../../data/adotta.json";
import { create_subscription_checkout } from "../../api/stripe/adottasubscription";
import Spinner from "../../components/Spinner";

const section_wrapper = "w-full px-8 md:px-32 lg:px-28 xl:px-36 gap-8";
const main_grid =
  "w-full grid md:grid-cols-1 justify-center lg:grid-cols-2 gap-20 lg:gap-10 xl:gap-24";
const footer_nav =
  "mt-10 border-t border-brown/30 flex items-center justify-between pt-10 mb-6";
const back_button_style =
  "flex gap-2 text-lg cursor-pointer hover:brightness-120 hover:scale-105 duration-200";

const Riepilogo = () => {
  const navigate = useNavigate();
  const { data, updateData } = useOutletContext();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBack = () => {
    navigate("/adotta/personalizza", { state: { preventScroll: true } });
  };

  const goPayment = async () => {
    const piano = adottapiani.find((piano) => piano.nome == data.livello);

    try {
      setIsLoading(true);
      const res = await create_subscription_checkout(piano.price_id, data.nome, data.livello, data.dedica);
      window.location.href = res.url;
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

  return (
    <section className={section_wrapper}>
      <section className={main_grid}>
        <CardRiepilogo />
        <TestoRiepilogo />
      </section>

      <article className={footer_nav}>
        <span className={back_button_style} onClick={handleBack}>
          <p>←</p>
          <p className="underline text-brown">Indietro</p>
        </span>

        <button className="red_button" onClick={goPayment}>
          Conferma adozione <b>&rarr;</b>
        </button>
      </article>

      <article>
        {errorMessage != "" && (
          <p className="mx-auto mb-4 small_paragraph text-darkred bg-darkred/5 border border-darkred/20 rounded-md px-4 py-2 text-center max-w-prose whitespace-pre-line font-medium">
            {errorMessage}
          </p>
        )}
        {isLoading && <Spinner size="w-12 h-12" />}
      </article>
    </section>
  );
};

export default Riepilogo;
