import React from 'react'
import BoxInfo from './BoxInfo'
import FormContatti from './FormContatti'

const section_style = 'pt-32 pb-20 bg-beige px-6 sm:px-12 md:px-16 xl:px-36 min-h-screen'
const header_wrapper = 'max-w-[768px] mb-8 md:mb-20'
const content_grid = 'grid grid-cols-1 lg:grid-cols-2 lg:gap-32 items-start'


const Contatti = () => {
  return (
    <section className={section_style}>
        
      <header className={header_wrapper}>
        <h3 className='small_heading text-darkred'>
          Restiamo in contatto
        </h3>

        <h2 className='title text-brown mt-8'>
          Scrivici. Veniamo a raccontarti tutto, <br className="hidden md:block" /> 
          <span className="italic text-darkred">davanti a un calice</span>
        </h2>
        
        <p className="normal_paragraph text-brown/60 mt-8 max-w-xl">
          Sia che tu voglia proporre una partnership, prenotare una visita o 
          semplicemente saperne di più sul nostro impatto sociale, siamo qui.
        </p>
      </header>


      <div className={content_grid}>
        <FormContatti />
        <BoxInfo />
      </div>

      
    </section>
  )
}

export default Contatti;