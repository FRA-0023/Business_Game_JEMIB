import React from 'react'

const BoxConfisca = ({ title, text }) => {
  const box_container_style = "py-6 border-t border-white/30";
  const title_style = "text-white big_text";
  const description_style = "small_heading text-white/70 mt-3";

  return (
    <div className={box_container_style}>
      <h3 className={title_style}>{title}</h3>
      <h4 className={description_style}>{text}</h4>
    </div>
  );
};
export default BoxConfisca