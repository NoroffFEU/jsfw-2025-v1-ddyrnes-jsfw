import React from "react";
import * as S from "./Header.styles";
import CartIcon from "../CartIcon";

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.Logo to="/">Noroff Shop</S.Logo>
        <S.Nav>
          <S.NavLink to="/">Home</S.NavLink>
          <S.NavLink to="/contact">Contact</S.NavLink>
          <CartIcon />
        </S.Nav>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}

export default Header;
