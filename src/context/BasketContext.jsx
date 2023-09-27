import { createContext, useState, useEffect } from "react";

export const BasketContext = createContext(null);

const BasketProvider = ({ children }) => {
  const storage = localStorage.getItem("basket");
  const [basket, setBasket] = useState(JSON.parse(storage) || []);

  const setProductToStorage = (data) => {
    setBasket([...basket, data]);
  };
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <BasketContext.Provider value={{setProductToStorage, basket}}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
