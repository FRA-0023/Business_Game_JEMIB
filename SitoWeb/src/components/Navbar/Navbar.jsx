import React, { useEffect, useState } from 'react';
import MenuHamburger from './MenuHamburger';
import NavbarLink from './NavbarLink';
import logo from "../../assets/logo.svg";
import { useLocation } from 'react-router';


const links = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "Shop", href: "/shop" },
  { id: 3, text: "Adotta una vigna", href: "/adotta" },
  { id: 4, text: "Esperienze", href: "/esperienze" },
  { id: 5, text: "Team", href: "/team" },
  { id: 6, text: "Contatti", href: "/contatti" },
  { id: 7, text: "FAQ", href: "/faq" }
];


const Navbar = () => {

  const location = useLocation()

  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [currentId, setCurrentId] = useState(null)
 
  useEffect(() => {
    const currentLink = links.find(link => link.href === location.pathname);
    
    if (currentLink) {
      setCurrentId(currentLink.id);
    } else {
      setCurrentId(null); 
    }
  }, [location.pathname]);
  
  
  const navbar_style = `
    max-w-screen w-full h-18 fixed top-0 left-0 z-[99] px-4 md:px-8 lg:px-10 
    flex justify-between items-center 
    bg-darkbeige lg:grid lg:grid-cols-8 transition-shadow duration-300
    ${openMenuMobile ? "shadow-none" : "shadow-md"}
  `; 

  const navbar_menu_style = `
    absolute left-0 top-18 w-full overflow-y-hidden transition-[max-height] duration-500 bg-darkbeige
    lg:relative lg:top-0 lg:w-full lg:col-span-6 lg:bg-transparent lg:max-h-none h-dvh lg:h-auto
    ${openMenuMobile ? "max-h-screen shadow-md lg:shadow-none" : "max-h-0"}
  `;

  const navbar_list_style = `
    w-full flex flex-col items-center justify-center gap-10 pt-8 md:pt-16 pb-24
    lg:flex-row lg:h-full lg:col-span-3 lg:pt-0 lg:pb-0 lg:gap-8
  `; 

  return (
    <nav className={navbar_style}>
      <article className="w-32 h-10 lg:col-span-1">
        <img src={logo} alt="logo Vite Libere" className='w-full h-full object-contain' />
      </article>


      <article className={navbar_menu_style}>
        <ul className={navbar_list_style}>
          {links.map((item) => (
            <NavbarLink 
              key={item.id} 
              id={item.id}
              text={item.text} 
              href={item.href} 
              handleClick={() => setOpenMenuMobile(false)}
              currentId={currentId}
            />
          ))}
        </ul>
      </article>


      <div className="lg:col-span-0 flex justify-end">
        <button 
          className="w-8 h-6 lg:hidden flex items-center justify-center" 
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
          aria-label="Menu"
        >
          <MenuHamburger openMenuMobile={openMenuMobile} />
        </button>
      </div>
    </nav>
  );
};


export default Navbar;