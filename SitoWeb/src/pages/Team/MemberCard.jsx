import React from 'react'

const MemberCard = ({ src, nome, ruolo, text, frase }) => {
    return (
        <article className='w-full'>
            <article className='w-full aspect-[3/2] md:aspect-[3/4] lg:aspect-[15/16] relative group overflow-hidden rounded-sm'>
                <img 
                    src={src || ""} 
                    alt={nome}  
                    className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500 bg-white'
                />
                
                <div className="absolute bottom-0 left-0 w-full px-8 pb-8 pt-20 lg:pt-36
                    bg-gradient-to-t from-darkred via-darkred/50 to-transparent 
                    opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 
                    flex flex-col justify-end group-active:opacity-100">
                    <p className='text-white font-serif text-lg italic leading-relaxed'>
                        {frase}
                    </p>
                </div>
            </article>

            <article className='mt-6'>
                <h3 className='text-brown font-serif text-2xl mb-1 italic'>
                    {nome}
                </h3>
                
                <p className='text-darkred/60 uppercase text-[10px] tracking-[0.2em] font-bold mb-3'>
                    {ruolo}
                </p>

                <p className='text-brown/70 font-light leading-relaxed max-w-sm'>
                    {text}
                </p>
            </article>
            
        </article>
    )
}


export default MemberCard