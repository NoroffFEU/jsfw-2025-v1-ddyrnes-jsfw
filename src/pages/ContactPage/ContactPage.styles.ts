import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export const RequiredNote = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-style: italic;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border: 2px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;
  }
`;

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border: 2px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 150px;
  resize: vertical;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
