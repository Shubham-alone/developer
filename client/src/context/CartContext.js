import React, {createContext, useContext, useState, useEffect} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
    const [cartItems, setCartItems] = useState( () => {
        
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect( () => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1) => {
       setCartItems((prevItems) => {
           const existingItem = prevItems.find((item) => item.id === product.id);

           if (existingItem) {
               return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item);
           }
           return [...prevItems, {...product, quantity}];
       });
    };

    const removeFromCart = (productId) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
      if (quantity < 1) return removeFromCart(productId);
           setCartItems((prevItems) => prevItems.map((item) => item.id === productId ? {...item, quantity } : item ));
    };

    const getCartTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
      <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity, getCartTotal }}>{children}</CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);