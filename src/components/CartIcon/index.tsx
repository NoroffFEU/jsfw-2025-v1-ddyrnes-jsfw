import React from "react";
import { ShoppingCart } from "lucide-react";
import * as S from "./CartIcon.styles";
import { useCart } from "../../hooks/useCart";

function CartIcon() {
  const { totalItems } = useCart();

  return (
    <S.CartLink to="/cart">
      <ShoppingCart size={20} />
      Cart ({totalItems})
    </S.CartLink>
  );
}

export default CartIcon;
