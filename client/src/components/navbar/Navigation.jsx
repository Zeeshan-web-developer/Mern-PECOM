import React, { useEffect, useState } from "react";
import Styles from "./Navigation.module.css";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";

import { getLoggedInUser } from "../../store/actions";
function Navigation() {
  const [totalCartItems, setTotalCartItems] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log("🚀 ~ file: Navigation.jsx ~ line 12 ~ Navigation ~ user", user);

  useEffect(() => {
    document.title = "Pizza Hunt";
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setTotalCartItems(cart.length);
    }
    dispatch(getLoggedInUser());
  }, []);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
      marginTop: "0",
      padding: "0",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#3f51b5" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      padding: "0.5rem",
    }),
    menu: (base) => ({
      ...base,
      marginTop: "0",
      border: "0",
      boxShadow: "0",
      borderRadius: "0",
      backgroundColor: "#fff",
      color: "#000",
      padding: "0",
    }),
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-lg p-3 mb-5 bg-body rounded"
    >
      <Container>
        <Navbar.Brand href="#home" className="underline">
          PIZZA HUT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={Styles.nav__links}>
            <Nav.Link onClick={() => history.push("/cart")}>
              Cart
              <i className="fa badge fa-lg" value={totalCartItems}>
                &#xf290;
              </i>
            </Nav.Link>

            {user ? (
              <Nav.Link onClick={() => history.push("/profile")}>
                Profile
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => history.push("/login")}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
