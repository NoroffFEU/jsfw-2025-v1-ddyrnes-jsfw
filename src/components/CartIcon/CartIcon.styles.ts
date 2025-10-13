import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: white;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  /* Mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const CartText = styled.span`
  /* Mobile - Hide "Cart" text */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const CartBadge = styled.span`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  min-width: 24px;
  text-align: center;

  /* Mobile - Position as notification badge */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: absolute;
    top: -4px;
    right: -4px;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    padding: 2px 6px;
    min-width: 20px;
  }
`;
