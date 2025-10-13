import React from "react";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import * as S from "./ProductCard.styles";
import { Product } from "../../types/api.types";
import { hasDiscount, calculateDiscountPercentage } from "../../utils/helpers";
import RatingStars from "../RatingStars";
import { useCart } from "../../hooks/useCart";

interface IProductCard {
  product: Product;
}

function ProductCard({ product }: IProductCard) {
  const { addToCart } = useCart();
  const showDiscount = hasDiscount(product.price, product.discountedPrice);
  const discountPercentage = showDiscount
    ? calculateDiscountPercentage(product.price, product.discountedPrice)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent card navigation
    e.stopPropagation(); // Stop event bubbling
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <S.Card to={`/product/${product.id}`}>
      <S.ImageWrapper>
        <S.Image
          src={product.image.url}
          alt={product.image.alt || product.title}
        />
        {showDiscount && (
          <S.DiscountBadge>-{discountPercentage}%</S.DiscountBadge>
        )}
      </S.ImageWrapper>
      <S.Content>
        <S.Title>{product.title}</S.Title>
        <S.PriceWrapper>
          <S.Price $isDiscounted={showDiscount}>
            {product.discountedPrice.toFixed(2)} kr
          </S.Price>
          {showDiscount && (
            <S.OriginalPrice>{product.price.toFixed(2)} kr</S.OriginalPrice>
          )}
        </S.PriceWrapper>
        <RatingStars
          rating={product.rating}
          size={14}
          reviewCount={product.reviews.length}
        />
        <S.ButtonGroup>
          <S.AddToCartButton onClick={handleAddToCart}>
            <ShoppingCart size={16} />
            Add to Cart
          </S.AddToCartButton>
          <S.ViewProductButton to={`/product/${product.id}`}>
            View Product
          </S.ViewProductButton>
        </S.ButtonGroup>
      </S.Content>
    </S.Card>
  );
}

export default ProductCard;
