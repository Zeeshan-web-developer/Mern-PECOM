import React, { useEffect, useState } from "react";
import Styles from "./Navigation.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
function Navigation() {
  const [totalCartItems, setTotalCartItems] = useState(0);
  const history = useHistory();
  useEffect(() => {
    document.title = "Pizza Hunt";
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setTotalCartItems(cart.length);
    }
  }, []);
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
            <Nav.Link href="/home">
              Cart
              <i className="fa badge fa-lg" value={totalCartItems}>
                &#xf290;
              </i>
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/login")}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
