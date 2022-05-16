import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const values = {
    address,
    contact,
    setAddress,
    setContact,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;
