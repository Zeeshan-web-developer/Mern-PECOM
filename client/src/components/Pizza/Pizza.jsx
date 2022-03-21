import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Pizza = ({ Pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState("1");
  const history = useHistory();

  const pizzaP = (Pizza) => {
    const obj = {
      _id: Pizza._id,
      name: Pizza.name,
      varient: varient,
      quantity: parseInt(quantity),
      price: Pizza.prices[0][varient] - 0.1 * Pizza.prices[0][varient],
      totalAmount:
        Pizza.prices[0][varient] * quantity -
        0.1 * Pizza.prices[0][varient] * quantity,
    };

    return obj;
  };
  const addToCart = () => {
    var cart = JSON.parse(localStorage.getItem("cart"));
    // ----------------------if the cart is not empty ---------------
    if (cart) {
      const item = cart.find(
        (item) => item._id === Pizza._id && item.varient === varient
      );

      //  ----------------------if the item is already in the cart with same varient increase quantity and total amount---------------
      if (item) {
        item.quantity += parseInt(quantity);
        item.totalAmount = item.price * item.quantity;
      }
      // ----------------------if the item is not in the cart with same varient add it to the cart---------------
      else {
        cart.push(pizzaP(Pizza));
      }
    }
    // ----------------------if the cart is empty add the item to the cart---------------
    else {
      cart = [];
      cart.push(pizzaP(Pizza));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="col-md-4 mb-4 d-flex align-items-stretch">
      <div className="card">
        <div className="view overlay">
          <img src={Pizza.image} className="card-img-top" alt="" />
        </div>
        <div className="card-body"></div>

        <div className="card-footer">
          <div className="d-flex justify-content-between text-center">
            <div className="varaint">
              <span className="w-100">Varaint</span>
              <Form.Select
                aria-label="Default select example"
                className="w-100"
                value={varient}
                onChange={(e) => setVarient(e.target.value)}
              >
                {Pizza &&
                  Pizza.varients &&
                  Pizza.varients.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
              </Form.Select>
            </div>
            <div className="quantity">
              <span>Quantity</span>
              <Form.Select
                aria-label="Default select example"
                className="w-100"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map(
                  (item, index) => (
                    <option key={index}>{item}</option>
                  )
                )}
              </Form.Select>
            </div>
          </div>
          <div className="d-flex justify-content-between w-100 flex-end">
            <p>
              Price : ₹
              {Pizza.prices[0][varient] * quantity -
                0.1 * Pizza.prices[0][varient] * quantity}
            </p>
            <p>
              <strike>₹{Pizza.prices[0][varient] * quantity}</strike>
            </p>
          </div>
          <button
            type="button"
            className="btn btn-danger btn-sm btn-block"
            onClick={addToCart}
          >
            ADD TO CART{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
