import React from "react";
import * as S from "./Footer.styles";

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterText>
          © {new Date().getFullYear()} Noroff Shop. Developed by Daniel Dyrnes.
        </S.FooterText>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}

export default Footer;
