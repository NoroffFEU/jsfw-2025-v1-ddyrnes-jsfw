import React from "react";
import { ShoppingCart } from "lucide-react";
import * as S from "./CartIcon.styles";
import { useCart } from "../../hooks/useCart";

function CartIcon() {
  const { totalItems } = useCart();

  return (
    <S.CartLink to="/cart">
      <ShoppingCart size={20} />
      <S.CartText>Cart</S.CartText>
      <S.CartBadge>{totalItems}</S.CartBadge>
    </S.CartLink>
  );
}

export default CartIcon;
