import React, { useEffect, useState } from 'react';
import ShopHeader from './ShopHeader';
import Wines from './Wines';


const Shop = () => {
  const [currentShop, setCurrentShop] = useState(() => {
    const savedCart = localStorage.getItem('currentShop');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("currentShop", JSON.stringify(currentShop));
  }, [currentShop]);

  const addItem = (item) => {
    const id = item.id;

    setCurrentShop((prevShop) => {
      if (prevShop[id]) {
        return {
          ...prevShop,
          [id]: {
            ...prevShop[id],
            quantity: prevShop[id].quantity + 1
          }
        };
      }
      return {
        ...prevShop,
        [id]: {
          quantity: 1,
          item: item 
        }
      };
    });
  };

  const shop_container_style = "w-full bg-beige min-h-screen pb-20";

  return (
    <section className={shop_container_style}>
      <ShopHeader />
      <Wines currentShop={currentShop} addItem={addItem} />
    </section>
  );
};


export default Shop;