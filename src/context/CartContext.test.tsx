import React from "react";
import { renderHook, act } from "@testing-library/react";
import { CartProvider } from "./CartContext";
import { useCart } from "../hooks/useCart";
import { Product } from "../types/api.types";

const mockProduct: Product = {
  id: "test-product-1",
  title: "Test Product",
  description: "A test product",
  price: 1000,
  discountedPrice: 80,
  image: {
    url: "https://example.com/image.jpg",
    alt: "Test image",
  },
  rating: 4.5,
  tags: ["test"],
  reviews: [],
};

function wrapper({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("CartContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("adding product increases cart count", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.totalItems).toBe(0);

    act(() => {
      result.current.addToCart(mockProduct);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.totalItems).toBe(1);
    expect(result.current.items[0].product.id).toBe("test-product-1");
    expect(result.current.items[0].quantity).toBe(1);
  });

  test("removing product clears it from cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
    });

    expect(result.current.items).toHaveLength(1);

    act(() => {
      result.current.removeFromCart("test-product-1");
    });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.totalItems).toBe(0);
  });

  test("updating quantity changes total count", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
    });

    expect(result.current.items[0].quantity).toBe(1);
    expect(result.current.totalItems).toBe(1);

    act(() => {
      result.current.updateQuantity("test-product-1", 3);
    });

    expect(result.current.items[0].quantity).toBe(3);
    expect(result.current.totalItems).toBe(3);
  });
});
