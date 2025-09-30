export function calculateDiscountPercentage(
  price: number,
  discountedPrice: number
): number {
  if (price <= 0 || discountedPrice >= price) {
    return 0;
  }

  const discount = ((price - discountedPrice) / price) * 100;
  return Math.round(discount);
}

export function hasDiscount(price: number, discountedPrice: number): boolean {
  return discountedPrice < price;
}

export function formatCurrency(amount: number): string {
  return `${amount.toFixed(2)} kr`;
}

export function generateStarRating(rating: number): string {
  const filledStars = "★".repeat(Math.floor(rating));
  const emptyStars = "☆".repeat(5 - Math.floor(rating));
  return filledStars + emptyStars;
}
