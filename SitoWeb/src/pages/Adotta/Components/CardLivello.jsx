import React from 'react'
import { useNavigate, useOutletContext } from 'react-router';


const card_container = "bg-white border border-darkbeige rounded-lg p-10 max-w-sm shadow-sm hover:scale-105 hover:border-darkred duration-200 cursor-pointer"
const icon_wrapper = "w-12 h-12 bg-green/60 rounded-full flex items-center justify-center"
const price_style = "text-brown/80 big_text"
const unit_style = "text-brown text-xl font-light italic font-serif"


const CardLivello = ({ Icon, title, quantità, prezzo_anno, vantaggi }) => {

  const {data, updateData} = useOutletContext()

  const navigate = useNavigate()

  const handleSelection = (title) => {
    updateData({livello: title, numviti: quantità, prezzo:prezzo_anno})
    navigate("/adotta/personalizza", { state: { preventScroll: true } })
  }

  return (
    <div className={card_container} onClick={()=>{handleSelection(title)}}>
      
      <div className="flex items-center gap-4 mb-2">
        <div className={icon_wrapper}>
          <Icon />
        </div>
        
        <div>
          <h3 className="small_title text-darkred">
            {title}
          </h3>
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase font-medium">
            {quantità}
          </p>
        </div>
      </div>


      <div className="flex items-baseline gap-2 mb-2">
        <span className={price_style}>€{prezzo_anno}</span>
        <span className={unit_style}>/ anno</span>
      </div>


      <ul className="space-y-5">
        {vantaggi.map((text, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="mt-1.5">
              <svg className="w-4 h-4 text-darkred" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>

            <span className="text-brown text-lg leading-snug font-light">
              {text}
            </span>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default CardLivello