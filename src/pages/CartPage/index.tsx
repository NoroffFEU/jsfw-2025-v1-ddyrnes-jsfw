import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CartPage.styles";
import { useCart } from "../../hooks/useCart";

function CartPage() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();

  const handleCheckout = () => {
    if (items.length > 0) {
      navigate("/checkout-success");
    }
  };

  const handleIncrement = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrement = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  // Empty cart state
  if (items.length === 0) {
    return (
      <S.Container>
        <S.Title>Shopping Cart</S.Title>
        <S.EmptyCart>
          <S.EmptyCartText>Your cart is empty.</S.EmptyCartText>
          <S.ContinueShoppingLink to="/">
            Continue Shopping
          </S.ContinueShoppingLink>
        </S.EmptyCart>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Shopping Cart</S.Title>

      <S.CartItems>
        {items.map((item) => {
          const itemTotal = item.product.discountedPrice * item.quantity;

          return (
            <S.CartItem key={item.product.id}>
              <S.ItemImage
                src={item.product.image.url}
                alt={item.product.image.alt || item.product.title}
              />

              <S.ItemDetails>
                <S.ItemTitle>{item.product.title}</S.ItemTitle>
                <S.ItemPrice>
                  {item.product.discountedPrice.toFixed(2)} kr each
                </S.ItemPrice>

                <S.ItemControls>
                  <S.QuantityControls>
                    <S.QuantityButton
                      onClick={() =>
                        handleDecrement(item.product.id, item.quantity)
                      }
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      -
                    </S.QuantityButton>
                    <S.Quantity>{item.quantity}</S.Quantity>
                    <S.QuantityButton
                      onClick={() =>
                        handleIncrement(item.product.id, item.quantity)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </S.QuantityButton>
                  </S.QuantityControls>

                  <S.RemoveButton
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    Remove
                  </S.RemoveButton>
                </S.ItemControls>
              </S.ItemDetails>

              <S.ItemRightColumn>
                <S.ItemTotal>{itemTotal.toFixed(2)} kr</S.ItemTotal>
              </S.ItemRightColumn>
            </S.CartItem>
          );
        })}
      </S.CartItems>

      <S.Summary>
        <S.SummaryRow>
          <S.SummaryLabel>Subtotal:</S.SummaryLabel>
          <S.SummaryValue>{totalPrice.toFixed(2)} kr</S.SummaryValue>
        </S.SummaryRow>

        <S.TotalRow>
          <S.SummaryLabel>Total:</S.SummaryLabel>
          <S.SummaryValue>{totalPrice.toFixed(2)} kr</S.SummaryValue>
        </S.TotalRow>

        <S.CheckoutButton onClick={handleCheckout}>
          Place Order
        </S.CheckoutButton>

        <S.ClearCartButton onClick={clearCart}>Clear Cart</S.ClearCartButton>
      </S.Summary>
    </S.Container>
  );
}

export default CartPage;
