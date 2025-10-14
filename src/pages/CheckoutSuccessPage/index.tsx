import React, { useEffect } from "react";
import { CheckCircle, Mail, Package, Truck } from "lucide-react";
import * as S from "./CheckoutSuccessPage.styles";
import { useCart } from "../../hooks/useCart";

function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <S.Container>
      <S.SuccessIcon>
        <CheckCircle size={64} />
      </S.SuccessIcon>
      <S.Title>Order Successful!</S.Title>
      <S.Message>
        Thank you for your purchase! Your order has been confirmed and will be
        processed shortly.
      </S.Message>

      <S.OrderSummary>
        <S.SummaryTitle>What's Next?</S.SummaryTitle>
        <S.SummaryText>
          <Mail size={20} />
          You will receive a confirmation email with your order details.
        </S.SummaryText>
        <S.SummaryText>
          <Package size={20} />
          Your items will be shipped within 2-3 business days.
        </S.SummaryText>
        <S.SummaryText>
          <Truck size={20} />
          You can track your order using the tracking number in your email.
        </S.SummaryText>
      </S.OrderSummary>

      <S.HomeButton to="/">Continue Shopping</S.HomeButton>
    </S.Container>
  );
}

export default CheckoutSuccessPage;
