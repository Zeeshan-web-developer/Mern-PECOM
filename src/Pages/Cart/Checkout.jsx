import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Styles from "./Cart.module.css";
function Checkout({ totalAmount }) {
  const onToken = (token) => {
    console.log(token);
    // alert("Payment Successful");
  };
  return (
    <div className={Styles.checkout__button}>
      <StripeCheckout
        token={onToken}
        amount={totalAmount * 100}
        shippingAddress
        currency="INR"
        stripeKey="pk_test_51Kff4BSAnGlUudZhEkugyapDLorJUS2Y3n4LZSF50fIfZdWrislGnn37Ef4IFkAJ1p91i8vTSvazkR54UjqRMvTS00hzx5rVcT"
      >
        <button type="submit" className={Styles.checkout__btn}>
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
