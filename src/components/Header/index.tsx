import React, { useState, useEffect } from "react";
import { Home, Mail } from "lucide-react";
import * as S from "./Header.styles";
import CartIcon from "../CartIcon";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <S.HeaderWrapper $isVisible={isVisible}>
      <S.HeaderContainer>
        <S.Logo to="/">
          <S.LogoBadge>NS</S.LogoBadge>
          <S.LogoText>
            <S.LogoFull>Noroff Shop</S.LogoFull>
            <S.LogoShort>Noroff</S.LogoShort>
          </S.LogoText>
        </S.Logo>
        <S.Nav>
          <S.NavLink to="/">
            <Home size={20} />
            <S.NavText>Home</S.NavText>
          </S.NavLink>
          <S.NavLink to="/contact">
            <Mail size={20} />
            <S.NavText>Contact</S.NavText>
          </S.NavLink>
          <CartIcon />
        </S.Nav>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}

export default Header;
