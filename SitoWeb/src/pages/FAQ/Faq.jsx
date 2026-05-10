import React, { useState } from 'react'
import { useNavigate } from 'react-router';


const Faq = () => {

    const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const faqData = [
    {
      domanda: "Come viene utilizzato il ricavato delle vendite?",
      risposta: "Il 100% del ricavato viene reinvestito nel mantenimento dei vigneti confiscati e nel finanziamento di borse di lavoro per persone in condizioni di fragilità sociale a Trapani."
    },
    {
      domanda: "Posso visitare la cantina e i vigneti?",
      risposta: "Certamente. Organizziamo visite guidate e degustazioni narrate. Puoi prenotare la tua visita direttamente nella sezione 'Esperienze' del nostro sito."
    },
    {
      domanda: "Cosa succede se adotto una vigna?",
      risposta: "Riceverai un certificato d'adozione digitale e aggiornamenti periodici sulla vendemmia. Inoltre, avrai diritto a uno sconto riservato sull'acquisto delle bottiglie prodotte da quei filari."
    },
    {
      domanda: "I vostri vini sono biologici?",
      risposta: "Sì, seguiamo un regime di agricoltura biologica certificata. Crediamo che la rinascita sociale debba passare anche attraverso il rispetto assoluto della terra."
    }
  ];

  return (
    <section className="min-h-screen bg-beige py-32 px-6 sm:px-12 md:px-16 xl:px-36">
      <div className="max-w-3xl mx-auto">
        
        <header className="mb-20 text-center">
          <h3 className="small_heading text-darkred">Domande Frequenti</h3>
          <h2 className="title text-brown mt-6 italic">Tutto quello che c'è da sapere su Vite Libere</h2>
        </header>


        <div className="space-y-4">
          {faqData.map((item, index) => (
            <article 
              key={index} 
              className="border-b border-brown/20 overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className={`text-xl font-serif transition-colors duration-300 ${openIndex === index ? 'text-darkred' : 'text-brown'}`}>
                  {item.domanda}
                </span>
                
                <span className={`transform transition-transform duration-500 text-darkred text-2xl ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                   {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-brown/70 leading-relaxed font-light text-lg">
                  {item.risposta}
                </p>
              </div>
            </article>
          ))}
        </div>


        <footer className="mt-20 p-10 bg-darkred/5 rounded-2xl text-center border border-darkred/10">
          <p className="text-brown/80 mb-6 italic">Non hai trovato la risposta che cercavi?</p>
          <button className="red_button px-10 py-3 text-sm" onClick={()=>{navigate("/contatti")}}>
            SCRIVICI DIRETTAMENTE
          </button>
        </footer>

      </div>
    </section>
  );
};

export default Faq