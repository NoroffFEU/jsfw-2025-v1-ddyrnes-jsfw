import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: auto;
`;

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
