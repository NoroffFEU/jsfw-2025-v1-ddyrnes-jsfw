import styled from "styled-components";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;
