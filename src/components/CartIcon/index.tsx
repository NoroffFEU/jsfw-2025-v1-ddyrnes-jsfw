import React from "react";
import * as S from "./CartIcon.styles";
import cartIcon from "../../assets/icons/shopping-cart.png";

interface ICartIcon {
  count?: number;
}

function CartIcon({ count = 0 }: ICartIcon) {
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
      Cart ({count})
    </S.CartLink>
  );
}

export default CartIcon;
