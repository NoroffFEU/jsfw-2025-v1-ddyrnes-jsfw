import { calculateDiscountPercentage, hasDiscount } from "./helpers";

describe("Helper Functions", () => {
  test("calculates discount percentage", () => {
    expect(calculateDiscountPercentage(100, 80)).toBe(20);
    expect(calculateDiscountPercentage(1000, 750)).toBe(25);
    expect(calculateDiscountPercentage(50, 25)).toBe(50);
  });

  test("handles products without discount", () => {
    expect(calculateDiscountPercentage(100, 100)).toBe(0);
    expect(calculateDiscountPercentage(100, 150)).toBe(0);
  });

  test("checks if product is discounted", () => {
    expect(hasDiscount(100, 80)).toBe(true);
    expect(hasDiscount(100, 100)).toBe(false);
    expect(hasDiscount(100, 120)).toBe(false);
  });
});
