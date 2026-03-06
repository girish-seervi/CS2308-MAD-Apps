import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // NEW: Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const index = cartItems.findIndex(item => item.id === itemId);
    
    if (index > -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1); // Removes exactly one item at that index
      setCartItems(newCart);
    }
  };

  return (
    // Don't forget to export the new function here!
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};