import React, { useState } from "react";
import { useNavigate } from "react-router";
import { sendContactEmail } from "../../api/email/contact_email";
import Spinner from "../../components/Spinner";

const FormContatti = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);

      await sendContactEmail(formData.nome, formData.email, formData.messaggio);
      setIsLoading(false);

      setErrorMessage("Messaggio inviato con successo!");
      navigate("/email-conferma");
      setFormData({
        nome: "",
        email: "",
        messaggio: "",
      });
    } catch (error) {
      setIsLoading(false);
      console.error("Errore nell'invio:", error)
      setErrorMessage("Errore nell'invio. Riprova.");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const labelStyle =
    "block text-brown/70 text-sm tracking-[0.15em] uppercase font-semibold mb-2";
  const inputStyle =
    "w-full bg-transparent border-b border-brown/30 py-3 text-brown/90 placeholder:text-brown/40 focus:outline-none focus:border-brown duration-300 font-serif text-lg";

  const fields = [
    {
      id: "nome",
      label: "Nome *",
      type: "text",
      placeholder: "Es. Maria Bianchi",
      required: true,
    },
    {
      id: "email",
      label: "Email *",
      type: "email",
      placeholder: "nome@esempio.it",
      required: true,
    },
  ];

  return (
    <article className="mx-auto lg:ml-0 py-10 w-full max-w-[768px]">
      <form
        className="space-y-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        {fields.map((f) => (
          <div key={f.id}>
            <label className={labelStyle}>{f.label}</label>
            <input
              name={f.id}
              type={f.type}
              placeholder={f.placeholder}
              className={inputStyle}
              required={f.required}
              value={formData[f.id]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div>
          <label className={labelStyle}>Messaggio*</label>
          <textarea
            name="messaggio"
            rows="5"
            placeholder="Ciao Vite Libere, vorrei sapere di più sul progetto..."
            className={`${inputStyle} resize-none`}
            maxLength={1000}
            value={formData.messaggio}
            onChange={handleChange}
            required
          />
          <div className="text-brown/40 text-[10px] mt-2 font-mono uppercase tracking-widest text-right">
            {formData.messaggio?.length || "0"}/1000
          </div>
        </div>

        <button type="submit" className="red_button px-12 py-4">
          Invia messaggio <b>&rarr;</b>
        </button>
      </form>

      <article className="mt-8">
        {errorMessage != "" && (
          <p className="mx-auto mb-4 small_paragraph text-darkred bg-darkred/5 border border-darkred/20 rounded-md px-4 py-2 text-center max-w-prose whitespace-pre-line font-medium">
            {errorMessage}
          </p>
        )}
        {isLoading && <Spinner size="w-12 h-12" />}
      </article>
    </article>
  );
};

export default FormContatti;
