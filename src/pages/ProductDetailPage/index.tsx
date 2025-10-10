import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./ProductDetailPage.styles";
import { Product } from "../../types/api.types";
import { fetchProductById } from "../../utils/api";
import { hasDiscount, calculateDiscountPercentage } from "../../utils/helpers";

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProduct() {
      if (!id) {
        setError("No product ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetchProductById(id);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to load product. Please try again later.");
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <S.Container>
        <S.LoadingWrapper>Loading product...</S.LoadingWrapper>
      </S.Container>
    );
  }

  if (error || !product) {
    return (
      <S.Container>
        <S.ErrorWrapper>
          <S.ErrorTitle>Product Not Found</S.ErrorTitle>
          <S.ErrorMessage>
            {error || "The product you're looking for doesn't exist."}
          </S.ErrorMessage>
          <S.BackLink onClick={() => navigate("/")}>← Back to Home</S.BackLink>
        </S.ErrorWrapper>
      </S.Container>
    );
  }

  const showDiscount = hasDiscount(product.price, product.discountedPrice);
  const discountPercentage = showDiscount
    ? calculateDiscountPercentage(product.price, product.discountedPrice)
    : 0;

  return (
    <S.Container>
      <S.BackLink onClick={() => navigate("/")}>← Back to Products</S.BackLink>

      <S.ProductWrapper>
        <S.ImageSection>
          <S.ImageWrapper>
            <S.Image
              src={product.image.url}
              alt={product.image.alt || product.title}
            />
            {showDiscount && (
              <S.DiscountBadge>-{discountPercentage}%</S.DiscountBadge>
            )}
          </S.ImageWrapper>
        </S.ImageSection>

        <S.InfoSection>
          <S.Title>{product.title}</S.Title>

          <S.Rating>⭐ {product.rating.toFixed(1)} / 5.0</S.Rating>

          <S.PriceWrapper>
            <S.Price $isDiscounted={showDiscount}>
              {product.discountedPrice.toFixed(2)} kr
            </S.Price>
            {showDiscount && (
              <S.OriginalPrice>{product.price.toFixed(2)} kr</S.OriginalPrice>
            )}
          </S.PriceWrapper>

          <S.Description>{product.description}</S.Description>

          {product.tags && product.tags.length > 0 && (
            <S.TagsWrapper>
              {product.tags.map((tag, index) => (
                <S.Tag key={index}>{tag}</S.Tag>
              ))}
            </S.TagsWrapper>
          )}

          <S.AddToCartButton disabled>
            Add to Cart (Coming Soon)
          </S.AddToCartButton>
        </S.InfoSection>
      </S.ProductWrapper>

      {product.reviews && product.reviews.length > 0 && (
        <S.ReviewsSection>
          <S.ReviewsTitle>
            Customer Reviews ({product.reviews.length})
          </S.ReviewsTitle>
          <S.ReviewsList>
            {product.reviews.map((review) => (
              <S.ReviewCard key={review.id}>
                <S.ReviewHeader>
                  <S.ReviewUsername>{review.username}</S.ReviewUsername>
                  <S.ReviewRating>⭐ {review.rating} / 5</S.ReviewRating>
                </S.ReviewHeader>
                <S.ReviewText>{review.description}</S.ReviewText>
              </S.ReviewCard>
            ))}
          </S.ReviewsList>
        </S.ReviewsSection>
      )}
    </S.Container>
  );
}

export default ProductDetailPage;
