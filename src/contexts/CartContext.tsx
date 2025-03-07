
import React, { createContext, useContext, useState, useEffect } from "react";
import { Wine } from "../data/wines";
import { toast } from "sonner";

export interface CartItem extends Wine {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (wine: Wine, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
      } catch (e) {
        console.error("Error parsing stored cart:", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (wine: Wine, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === wine.id);
      
      if (existingItem) {
        toast(`Added ${quantity} more ${wine.name} to cart`);
        return prevItems.map((item) =>
          item.id === wine.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast(`Added ${wine.name} to cart`);
        return [...prevItems, { ...wine, quantity }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => {
      const item = prevItems.find(item => item.id === id);
      if (item) {
        toast(`Removed ${item.name} from cart`);
      }
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast("Cart cleared");
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
