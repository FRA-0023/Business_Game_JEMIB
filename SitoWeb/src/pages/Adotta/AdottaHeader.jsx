import React from 'react'

const container_style = 'w-full bg-darkbeige pt-40 pb-28'
const article_style = 'mx-auto max-w-[824px]'
const text_wrapper_style = 'normal_paragraph text-center text-brown mt-10 px-4 lg:px-8'

const AdottaHeader = () => {
  return (
    <section className={container_style}>
      <article className={article_style}>
        
        <h3 className='small_heading text-center text-darkred'>
          Vite Libere · Adozione simbolica
        </h3>


        <h2 className='title text-center text-brown mt-8'>
          Dai un nome a un filare: <br /> <i className='text-darkred'>Cambia un destino</i>
        </h2>


        <p className={text_wrapper_style}>
          Adottare una vigna su un bene confiscato significa restituire dignità a un pezzo di terra e dare 
          lavoro vero a chi cerca un nuovo inizio. È un gesto piccolo. È un gesto enorme.
        </p>

      </article>
    </section>
  )
}

export default AdottaHeader