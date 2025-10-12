import React, { createContext, useState, useEffect, ReactNode } from "react";
import { CartItem, CartContextType } from "../types/cart.types";
import { Product } from "../types/api.types";
import {
  saveCartToStorage,
  loadCartFromStorage,
  clearCartFromStorage,
} from "../utils/storage";

// Create the Context
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Create the Provider Component
interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  // Initialize state from localStorage
  const [items, setItems] = useState<CartItem[]>(() => {
    return loadCartFromStorage();
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    saveCartToStorage(items);
  }, [items]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setItems((prevItems) => {
      // Check if product already exists in cart
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // If exists, increment quantity
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new, add to cart with quantity 1
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart completely
  const removeFromCart = (productId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  // Update quantity of a product
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      // If quantity is 0 or less, remove the item
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setItems([]);
    clearCartFromStorage();
  };

  // Calculate total number of items
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price (using discounted prices)
  const totalPrice = items.reduce(
    (total, item) => total + item.product.discountedPrice * item.quantity,
    0
  );

  // Context value to provide
  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
