import React from "react";
import MemberCard from "./MemberCard";
import img1 from "../../assets/team1.jpg";
import img2 from "../../assets/team2.jpg";
import img3 from "../../assets/team3.jpg";
import img4 from "../../assets/team4.jpg";

const Team = () => {
  const membri = [
    {
      id: 1,
      src: img1,
      nome: "Elena Ferrante",
      ruolo: "Amministratore",
      text: "«L'ordine dietro le quinte che permette ai sogni di crescere.»",
      frase:
        "Responsabile della burocrazia e dei payroll, Elena gestisce l'ossatura invisibile di Vite Libere.",
    },
    {
      id: 2,
      src: img2,
      nome: "Luca Bianchi",
      ruolo: "Operatore Vinicolo",
      text: "«La voce della cantina si ascolta nel silenzio della fermentazione.»",
      frase:
        "Segue ogni fase della trasformazione in cantina con precisione e dedizione.",
    },
    {
      id: 3,
      src: img4,
      nome: "Alessandra Neri",
      ruolo: "Operatore Vinicolo",
      text: "«Dalle radici alla bottiglia, ogni gesto ha il suo peso.»",
      frase:
        "Lavora tra vigneto e cantina traducendo la cura della terra in vino.",
    },
    {
      id: 4,
      src: img3,
      nome: "Matteo Serra",
      ruolo: "Operatore Vinicolo",
      text: "«Custode del ritmo naturale delle stagioni.»",
      frase:
        "Si occupa delle lavorazioni pratiche e della manutenzione in produzione.",
    },
  ];

  return (
    <section className="w-full bg-beige px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 py-36">
      <header className="max-w-3xl">
        <h3 className="small_heading text-darkred">Le persone di Vite Libere</h3>

        <h2 className="title text-brown mt-8">
          <span className="italic text-darkred">Volti</span>, mani, storie.{" "}
          <br />
          Il vino, prima di tutto, è loro
        </h2>

        <p className="normal_paragraph mt-10 text-brown/60">
          Dietro a ogni bottiglia Vite Libere c'è una comunità: agricoltori, tutor,
          enologi, educatori, tirocinanti che hanno scelto di costruire qualcosa
          di diverso. Ecco alcuni di loro.
        </p>
      </header>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 mt-24">
        {membri.map((item) => (
          <MemberCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Team;
