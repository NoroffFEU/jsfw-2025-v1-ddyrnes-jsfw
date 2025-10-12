import React from "react";
import * as S from "./CartIcon.styles";
import cartIcon from "../../assets/icons/shopping-cart.png";
import { useCart } from "../../hooks/useCart";

function CartIcon() {
  const { totalItems } = useCart();

  return (
    <S.CartLink to="/cart">
      <img
        src={cartIcon}
        alt="Cart"
        style={{
          width: "20px",
          height: "20px",
          filter: "brightness(0) invert(1)",
        }}
      />
      Cart ({totalItems})
    </S.CartLink>
  );
}

export default CartIcon;
