import React from 'react'
import { useNavigate } from 'react-router';

const box_container_style = `
  relative w-full h-full p-8 z-10 cursor-pointer
  bg-white border border-brown/25 rounded-lg 
  transition-all duration-500 shadow-none 
  group-hover:-translate-y-6
  lg:group-hover:shadow-[10px_20px_50px_theme(colors.darkred/50%))] 
  lg:group-hover:-translate-y-4
  active:-translate-y-4 active:shadow-[10px_20px_50px_theme(colors.darkred/50%)] 
  active:scale-[0.98] 
`;

const BoxProgetti = ({ title, text, href_text, href }) => {
  const navigate = useNavigate()

  return (
    <article className="w-full group relative">
      <article className={box_container_style} onClick={() => navigate(href)}>
        <h5 className="text-darkred small_title">
          {title}
        </h5>


        <p className="small_paragraph text-brown/90 mb-4 mt-4">
          {text}
        </p>


        <a className="text-darkred font-medium">
          {href_text}
        </a>
      </article>
    </article>
  );
}

export default BoxProgetti