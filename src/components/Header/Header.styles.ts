import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    opacity: 0.9;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;
