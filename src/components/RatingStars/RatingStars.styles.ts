import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme }) => theme.colors.accent};

  /* Empty stars (outline only) */
  svg:not([fill]) {
    opacity: 0.3;
  }
`;

export const RatingText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const ReviewCount = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
`;

export const NoReviews = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`;
