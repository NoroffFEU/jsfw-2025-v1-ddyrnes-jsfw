import React from "react";
import { Star, StarHalf } from "lucide-react";
import * as S from "./RatingStars.styles";

interface IRatingStars {
  rating: number;
  maxStars?: number;
  size?: number;
  showNumber?: boolean;
  reviewCount?: number;
}

function RatingStars({
  rating,
  maxStars = 5,
  size = 16,
  showNumber = true,
  reviewCount,
}: IRatingStars) {
  // If no rating, show "No reviews yet"
  if (rating === 0) {
    return <S.NoReviews>No reviews yet</S.NoReviews>;
  }

  // Round to nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;

  // Calculate stars
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <S.Container>
      {/* Rating number */}
      {showNumber && <S.RatingText>{rating.toFixed(1)}</S.RatingText>}

      <S.StarsWrapper>
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={`full-${index}`} size={size} fill="currentColor" />
        ))}

        {/* Half star */}
        {hasHalfStar && <StarHalf size={size} fill="currentColor" />}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star key={`empty-${index}`} size={size} />
        ))}
      </S.StarsWrapper>

      {/* Review count */}
      {reviewCount !== undefined && reviewCount > 0 && (
        <S.ReviewCount>({reviewCount})</S.ReviewCount>
      )}
    </S.Container>
  );
}

export default RatingStars;
