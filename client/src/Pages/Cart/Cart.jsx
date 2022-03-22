import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Styles from "./Cart.module.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Items from "./Items";
function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
      setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
    }
  }, []);
  const history = useHistory();
  return (
    <Card
      className="m-4 shadow-lg p-3  bg-white rounded"
      style={{ height: "100%" }}
    >
      <Card className=" bg-white rounded" style={{ height: "25%" }}>
        <table style={{ width: "100%" }}>
          <Header />
          <tbody className={Styles.product__item}>
            <Items items={cart} />
          </tbody>
        </table>
        <Card.Body></Card.Body>
        <Card.Footer className="d-flex">
          <small className="text-muted" style={{ flex: "1" }}>
            Total Amount
          </small>
          <h5>{total}</h5>
        </Card.Footer>
      </Card>
      <div className="d-flex">
        <button
          type="submit"
          className={Styles.back__button}
          onClick={() => history.push("/")}
        >
          Back to cart
        </button>
        <Checkout totalAmount={total} />
      </div>
    </Card>
  );
}

export default Cart;
