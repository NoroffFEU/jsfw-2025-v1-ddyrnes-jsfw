import React from "react";
import * as S from "./ProductCard.styles";
import { Product } from "../../types/api.types";
import { hasDiscount, calculateDiscountPercentage } from "../../utils/helpers";
import RatingStars from "../RatingStars";

interface IProductCard {
  product: Product;
}

function ProductCard({ product }: IProductCard) {
  const showDiscount = hasDiscount(product.price, product.discountedPrice);
  const discountPercentage = showDiscount
    ? calculateDiscountPercentage(product.price, product.discountedPrice)
    : 0;

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
      </S.Content>
    </S.Card>
  );
}

export default ProductCard;
