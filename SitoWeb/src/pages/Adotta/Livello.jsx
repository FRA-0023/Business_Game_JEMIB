import React from "react";
import CardLivello from "./Components/CardLivello";
import {
  PiccolaVignaIcon,
  VignaCompletaIcon,
  VignaMediaIcon,
} from "../../assets/adotta/iconeadotta";

const Livello = () => {
  const livelli = [
    {
      id: 1,
      icon: PiccolaVignaIcon,
      title: "Seed",
      quantità: "5 viti",
      prezzo_anno: "49",
      vantaggi: [
        "Certificato digitale personalizzato",
        "Aggiornamenti stagionali via email",
        "3 bottiglie di vino miste (un rosso, un bianco, un rosato)",
      ],
    },
    {
      id: 2,
      icon: VignaMediaIcon,
      title: "Roots",
      quantità: "15 viti",
      prezzo_anno: "199",
      vantaggi: [
        "Certificato di adozione cartaceo",
        "Targa con il proprio nome sulla porzione di vigna",
        "6 bottiglie di vino con etichetta personalizzata Adottato da Nome",
        "Sconto del 5% sulle visite guidate condivisibile fino a 4 ospiti.",
      ],
    },
    {
      id: 3,
      icon: VignaCompletaIcon,
      title: "Liber",
      quantità: "30 viti",
      prezzo_anno: "299",
      vantaggi: [
        "Tutti i vantaggi dei precedenti",
        "12 bottiglie a scelta",
        "Invito esclusivo per due persone alla Vendemmia Aperta",
        "Incontro dedicato con i lavoratori per ascoltare la loro storia di riscatto",
        "Reportage fotografico annuale",
      ],
    },
  ];

  return (
    <section className="flex flex-wrap px-6 md:px-12 lg:px-24 xl:px-32 justify-center gap-12">
      {livelli.map((item) => {
        return (
          <CardLivello
            key={item.id}
            title={item.title}
            Icon={item.icon}
            quantità={item.quantità}
            prezzo_anno={item.prezzo_anno}
            vantaggi={item.vantaggi}
          />
        );
      })}
    </section>
  );
};

export default Livello;
