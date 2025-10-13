import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;

  /* Mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

export const ControlsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.md}
    calc(${({ theme }) => theme.spacing.md} * 3);
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;
  }
`;

export const SortWrapper = styled.div`
  min-width: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SortSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ResultsCount = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  /* Tablet */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }

  /* Mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ErrorTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;
