import React, { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router";
import FormAdozione from "./Components/FormAdozione";

const section_wrapper = "w-full px-8 md:px-32 lg:px-24 xl:px-36 gap-8";
const main_grid =
  "w-full grid md:grid-cols-1 justify-center lg:grid-cols-2 gap-12 lg:gap-0";
const footer_nav =
  "mt-20 border-t border-brown/20 flex flex-wrap gap-6 items-center justify-between pt-10";
const back_button_style =
  "flex gap-2 text-lg cursor-pointer hover:text-darkred transition-all duration-200 group";

const Personalizza = () => {
  const navigate = useNavigate();
  const { data, updateData } = useOutletContext();
  const formRef = useRef(null);

  const handleBack = () => {
    updateData({
      nome: "",
      email: "",
      dedica: "",
      livello: "",
      prezzo: "",
    });
    navigate("/adotta", { state: { preventScroll: true } });
  };

  const handleNext = () => {
    navigate("/adotta/riepilogo", { state: { preventScroll: true } });
  };

  return (
    <section className={section_wrapper}>
      <section className={main_grid}>
        <article>
          <h4 className="text-center lg:text-start title text-darkred mt-6">
            Personalizza la tua adozione
          </h4>

          <p className="text-center lg:text-start normal_paragraph text-brown mt-6 lg:pr-12">
            Aggiungi il nome che apparirà sul certificato e una dedica per chi
            riceverà — o per te stesso. Le parole resteranno legate al filare.
          </p>
        </article>

        <FormAdozione
          ref={formRef}
          data={data}
          updateData={updateData}
          handleSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
        />
      </section>

      <article className={footer_nav}>
        <div className={back_button_style} onClick={handleBack}>
          <p className="group-hover:-translate-x-1 duration-200">←</p>
          <p className="underline text-brown group-hover:text-darkred">
            Torna ai livelli
          </p>
        </div>

        <button
          className="red_button px-10"
          onClick={() => {
            formRef.current?.requestSubmit();
          }}
        >
          Continua al riepilogo <b>&rarr;</b>
        </button>
      </article>
    </section>
  );
};

export default Personalizza;
