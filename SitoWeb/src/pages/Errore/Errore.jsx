import React from 'react'
import { useNavigate } from 'react-router';


const Errore = () => {

  const navigate = useNavigate();

  return (
    <main
      className="
        min-h-screen
        bg-beige
        flex
        items-center
        justify-center
        px-6
        py-12
      "
    >

      <section
        className="
          w-full
          max-w-2xl
          bg-white/90
          backdrop-blur-md
          border border-brown/10
          rounded-[2rem]
          shadow-xl
          p-10 md:p-14
          flex
          flex-col
          items-center
          text-center
        "
      >

        <div
          className="
            h-24
            w-24
            rounded-full
            bg-darkred/10
            flex
            items-center
            justify-center
            mb-8
          "
        >
          <span className="text-5xl font-bold text-darkred">
            ×
          </span>
        </div>

        <h1
          className="
            title
            text-darkred/70
            mb-6
          "
        >
          Pagamento fallito
        </h1>

        <p
          className="
            text-brown/70
            text-base
            md:text-lg
            leading-relaxed
            max-w-xl
            mb-10
          "
        >
          Si è verificato un errore; prova a ricaricare la pagina. <br />
          Se il problema persiste, non esitare a contattarci. 
        </p>

        <button
          onClick={() => navigate("/")}
          className="
            bg-darkred
            text-white
            px-8
            py-3
            rounded-full
            font-medium
            transition-all
            duration-300
            hover:brightness-110
            hover:scale-105
            active:scale-95
            shadow-md
          "
        >
          Torna alla home
        </button>

      </section>

    </main>
  );
};

export default Errore