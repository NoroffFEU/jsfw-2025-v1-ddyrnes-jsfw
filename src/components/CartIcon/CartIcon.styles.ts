import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: white;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
