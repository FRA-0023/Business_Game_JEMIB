import React, { useState, useEffect } from 'react';
import AdottaHeader from './AdottaHeader';
import AdottaWorkflow from './AdottaWorkflow';
import { Outlet } from 'react-router';


const Adotta = () => {
  const [data, setData] = useState(() => {
    const saved = sessionStorage.getItem("adotta-data");
    return saved ? JSON.parse(saved) : {
      nome: "",
      email: "",
      dedica: "",
      livello: "",
      prezzo: ""
    };
  });

  const updateData = (newData) => {
    setData((prev) => {
      const updated = { ...prev, ...newData };
      sessionStorage.setItem("adotta-data", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <section>      
      <AdottaHeader />
        
      <section className='w-full bg-beige pt-12 pb-20 md:pb-36'>
        <AdottaWorkflow />
        <Outlet context={{ data, updateData }} />
      </section>
    </section>
  );
};


export default Adotta;