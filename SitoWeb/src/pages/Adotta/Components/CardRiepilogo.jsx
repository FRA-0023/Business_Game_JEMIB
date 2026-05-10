import React from 'react'
import { useOutletContext } from 'react-router'

const container_style = "w-full mx-auto lg:ml-0 bg-white border border-brown/60 px-6 md:px-12 py-8 max-w-[524px] rounded-lg shadow-sm overflow-hidden"
const grid_row_style = "grid grid-cols-[auto_1fr] gap-6 items-start w-full"
const label_style = "text-brown font-serif text-md whitespace-nowrap"
const value_style = "text-brown font-medium flex justify-end items-center min-w-0"
const footer_style = "border-t border-brown pt-8 mt-8"


const CardRiepilogo = () => {
  const {data, updateData} = useOutletContext()

  const summaryData = [
    { label: "Adozione", value: data.livello },
    { label: "Filare", value: data.numviti },
    { label: "Adottante", value: data.nome },
    { label: "Email", value: data.email },
    { label: "Dedica", value: data.dedica }
  ];

  return (
    <div className={container_style}>
        
      <h2 className="text-darkred text-2xl md:text-3xl font-serif mb-6">
        Riepilogo
      </h2>


      <div className="space-y-4 mb-4 w-full">
        {summaryData.map((item, index) => (
          <div key={index} className={grid_row_style}>
            <span className={label_style}>
              {item.label}
            </span>

            <p className={value_style}>
              <span className="shrink-0">«</span>
              <span className="truncate mx-0.5">
                {item.value}
              </span>
              <span className="shrink-0">»</span>
            </p>
          </div>
        ))}
      </div>


      <div className={footer_style}>
        <div className="flex justify-between items-center gap-2">
          <span className="text-brown/80 text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
            TOTALE
          </span>
          <span className="text-darkred text-3xl md:text-4xl font-serif">
            €{data.prezzo}/anno
          </span>
        </div>
      </div>

    </div>
  );
};

export default CardRiepilogo