import React from 'react'
import vigna from "../../assets/vigna.jpg"
import BoxProgetti from './Components/BoxProgetti'


const progetti = [
  {
    id: 1,
    title: "Scopri il progetto",
    text: "Dietro ogni calice ci sono volti, storie e mani che coltivano il futuro. Incontra le persone che rendono possibile Vite Libere.",
    href_text: "Conosci il team ⟶",
    href: "/team"
  },
  {
    id: 2,
    title: "Adotta una vigna",
    text: "Diventa protagonista della vendemmia. Segui il ciclo della vite, ricevi il tuo vino personalizzato e sostieni l'agricoltura sociale.",
    href_text: "Inizia l'adozione ⟶",
    href: "/adotta"
  },
  {
    id: 3,
    title: "I nostri frutti",
    text: "Porta a tavola il gusto della giustizia. Scegli i nostri prodotti biologici nati dal lavoro inclusivo e dal riscatto dei terreni confiscati.",
    href_text: "Visita lo shop ⟶",
    href: "/shop"
  },
]

const Progetti = () => {
  return (
    <section className='w-full pt-16 pb-24 bg-beige px-10 md:px-20'>
      <h4 className='small_heading text-darkred/90 mb-12'>
        I nostri progetti
      </h4>


      <article className='grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 lg:mt-16'>
        {progetti.map((item) => (
          <BoxProgetti 
            key={item.id} 
            title={item.title} 
            text={item.text} 
            href_text={item.href_text} 
            href={item.href}
          />
        ))}
      </article>


    </section>
  )
}

export default Progetti