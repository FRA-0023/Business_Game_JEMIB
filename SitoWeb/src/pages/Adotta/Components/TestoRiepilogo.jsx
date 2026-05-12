import React from 'react'

const TestoRiepilogo = ()=>{

    const destinazione_soldi = [
    {
      id:1,
      text: "Il 70% finanzia inclusione lavorativa di persone in fragilità."
    },
    {
      id:2,
      text: "Il 20% sostiene la coltivazione biologica e la cura della biodiversità."
    },
    {
      id:3,
      text: "Il 10% copre la gestione amministrativa del bene confiscato."
    },
  ]


  return (
      <article className='mx-auto lg:ml-0'> 
          <h4 className='text-darkred text-2xl font-serif leading-tight'>
            Il tuo sostegno, in chiaro:
          </h4>
          
          
          <ul className='mt-8'>
            {
              destinazione_soldi.map((item)=>{
                return (
                  <li className="flex items-start gap-4 mt-4" key={item.id}>
                    <span className="mt-1.5">
                      <svg className="w-4 h-4 text-darkred" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>

                    <p className="text-brown text-lg leading-snug font-light">
                      {item.text}
                    </p>
                  </li>
                )
              })
            }
          </ul>
        </article>
  )
}

export default TestoRiepilogo