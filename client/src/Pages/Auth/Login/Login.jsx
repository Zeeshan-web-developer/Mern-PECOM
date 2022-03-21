import React, { useState } from "react";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Styles from "./Login.module.css";
function login() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className={Styles.container}>
      <Container>
        <Row>
          <Col md={5} sm={12} className="offset-md-3">
            <Card>
              <Card.Header>
                <h3 className="pt-4 text-center pb-4">Login</h3>
              </Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter Your Email"
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Enter Your Email.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Your Password"
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Enter Your Password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" className={Styles.btn__login}>
                      Login{" "}
                    </Button>
                  </Row>
                </Form>
              </Card.Body>
              <Card.Footer className="pt-4 text-center pb-4">
                <small className="text-muted">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    onClick={() => history.push("/register")}
                  >
                    Sign Up
                  </Link>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default login;
