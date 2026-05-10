import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendEsperienzeEmail } from "../../api/email/esperienze_email";
import Spinner from "../../components/Spinner";

const PrenotaEsperienze = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedExperience = location.state?.selectedExperience || "";

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    esperienza: selectedExperience,
    partecipanti: "2",
    data: "",
    note: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);
      await sendEsperienzeEmail(
        formData.nome,
        formData.email,
        formData.esperienza,
        formData.partecipanti,
        formData.data,
        formData.note,
      );
      setFormData({
        nome: "",
        email: "",
        esperienza: selectedExperience,
        partecipanti: "2",
        data: "",
        note: "",
      });

      navigate("/email-conferma");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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

  const formFields = [
    {
      name: "nome",
      label: "Nome Completo *",
      type: "text",
      placeholder: "Es. Maria Bianchi",
      required: true,
    },
    {
      name: "email",
      label: "Email di contatto *",
      type: "email",
      placeholder: "nome@esempio.it",
      required: true,
    },
    {
      name: "partecipanti",
      label: "Numero Partecipanti",
      type: "number",
      placeholder: "2",
      required: true,
      min: "1",
    },
    {
      name: "data",
      label: "Data Preferita",
      type: "date",
      placeholder: "",
      required: true,
    },
  ];

  return (
    <div className="min-h-screen bg-beige p-6 lg:px-20 flex justify-center items-center py-24">
      <article className="w-full max-w-[800px] p-8 lg:p-16 rounded-3xl">
        <header className="mb-12 text-center lg:text-left">
          <h1 className="text-darkred font-serif text-4xl md:text-5xl italic mb-4">
            Conferma Prenotazione
          </h1>
          <p className="text-brown/60 text-sm uppercase tracking-widest">
            Stai prenotando:{" "}
            <span className="text-brown font-bold border-b border-darkred/30 pb-1">
              {formData.esperienza || "Esperienza da definire"}
            </span>
          </p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {formFields.map((field) => (
              <div key={field.name}>
                <label className={labelStyle}>{field.label}</label>
                <input
                  {...field}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
            ))}
          </div>

          <article>
            <label className={labelStyle}>Esperienza Selezionata</label>
            <select
              name="esperienza"
              className={`${inputStyle} appearance-none cursor-pointer`}
              value={formData.esperienza}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Seleziona un'opzione
              </option>
              {[
                "Enoturismo Solidale",
                "Vendemmia Aperta",
                "Box Regalo Solidale",
                "Partnership Etiche",
              ].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </article>

          <article>
            <label className={labelStyle}>Note o Richieste Particolari</label>
            <textarea
              name="note"
              rows="4"
              value={formData.note}
              onChange={handleChange}
              placeholder="Allergie o dettagli aggiuntivi..."
              className={`${inputStyle} resize-none`}
              maxLength={1000}
            />
            <div className="text-brown/40 text-[10px] mt-2 font-mono text-right uppercase font-bold">
              {formData.note.length}/1000
            </div>
          </article>

          <div className="flex flex-col items-center lg:items-start mb-20">
            <button
              type="submit"
              className="red_button w-full md:w-auto px-16 py-3 text-xl transition-all shadow-md shadow-darkred/10"
            >
              Invia Richiesta <b>&rarr;</b>
            </button>
          </div>

          <article>
            {errorMessage != "" && (
              <p className="mx-auto mb-4 small_paragraph text-darkred bg-darkred/5 border border-darkred/20 rounded-md px-4 py-2 text-center max-w-prose whitespace-pre-line font-medium">
                {errorMessage}
              </p>
            )}
            {isLoading && <Spinner size="w-12 h-12" />}
          </article>
        </form>
      </article>
    </div>
  );
};

export default PrenotaEsperienze;
