import React, { forwardRef } from 'react';
import { useOutletContext } from 'react-router';


const label_style = "block text-brown/70 text-sm tracking-[0.15em] uppercase font-semibold mb-2";
const input_style = "w-full bg-transparent border-b border-brown/30 py-3 text-brown/90 placeholder:text-brown/40 focus:outline-none focus:border-brown duration-300 font-serif text-lg";
const container_style = "mx-auto lg:ml-0 p-10 w-full max-w-[524px] rounded-lg";


const FormAdozione = forwardRef(({ handleSubmit }, ref) => {
  const { data, updateData } = useOutletContext();

  const fields = [
    { id: 'nome', label: "Nome dell'adottante *", type: 'text', placeholder: "Es. Maria Bianchi", required: true },
    { id: 'email', label: "Email *", type: 'email', placeholder: "nome@esempio.it", required: true },
  ];

  return (
    <article className={container_style}>
      <form className="space-y-10" onSubmit={handleSubmit} ref={ref}>
        
        {fields.map((f) => (
          <div key={f.id}>
            <label className={label_style}>{f.label}</label>
            <input 
              type={f.type}
              placeholder={f.placeholder}
              required={f.required}
              className={input_style}
              value={data[f.id] || ""}
              onChange={(e) => updateData({ [f.id]: e.target.value })}
            />
          </div>
        ))}


        <div>
          <label className={label_style}>Dedica (Opzionale)</label>
          <textarea 
            rows="3"
            placeholder="A papà, perché credeva nella terra." 
            className={`${input_style} resize-none`}
            maxLength={200}
            value={data.dedica || ""}
            onChange={(e) => updateData({ dedica: e.target.value })}
          />
          <div className="text-brown/60 text-xs mt-2 font-mono">
            {(data.dedica || "").length}/200
          </div>
        </div>

      </form>
    </article>
  );
});


export default FormAdozione;