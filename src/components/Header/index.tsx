import React from "react";
import * as S from "./Header.styles";

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.Logo to="/">Noroff Shop</S.Logo>
        <S.Nav>
          <S.NavLink to="/">Home</S.NavLink>
          <S.NavLink to="/contact">Contact</S.NavLink>
          <S.NavLink to="/cart">Cart (0)</S.NavLink>
        </S.Nav>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}

export default Header;
