import React from 'react'
import { useNavigate } from 'react-router';


const EmailConferma = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-10">
        
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full border border-darkred/20 flex items-center justify-center bg-darkred/5">
            <svg 
              className="w-10 h-10 text-darkred" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </div>


        <div className="space-y-4">
          <h1 className="text-darkred font-serif text-4xl italic leading-tight">
            Messaggio Inviato
          </h1>
          <p className="text-brown/70 text-lg">
            Grazie per averci contattato. Abbiamo ricevuto la tua richiesta e ti risponderemo al più presto.
          </p>
        </div>


        <div className="pt-6">
          <button 
            onClick={() => navigate('/')}
            className="red_button px-10 py-4 text-lg"
          >
            Torna alla Home
          </button>
        </div>


        <p className="text-[10px] text-brown/40 uppercase tracking-[0.2em] pt-12">
          Cantine VL · Tradizione e Qualità
        </p>

      </div>
    </div>
  );
};


export default EmailConferma