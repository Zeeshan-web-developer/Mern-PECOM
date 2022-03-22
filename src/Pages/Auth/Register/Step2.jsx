import React, { useState } from "react";
import { Form, Row, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Styles from "./Register.module.css";
import { incrementPageCount, decrementPageCount } from "../../../store/actions";
function Register({ formData, setFormData }) {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(incrementPageCount());
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <small
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          textJustify: "justify",
        }}
      >
        <small>
          Password should be eight chartaters Long, at least one uppercase ,one
          symbol, one number, and one small case letter{" "}
        </small>
      </small>
      <Row className="mb-3">
        <Form.Group md="4" controlId="validationCustom01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="text"
            value={formData.password}
            placeholder="Enter Your Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}"
            onChange={(e) => {
              setPassword(e.target.value);
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom01">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="confirm your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            pattern={password}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <div className={Styles.buttons}>
          <Button
            className={Styles.btn__login}
            onClick={() => dispatch(decrementPageCount())}
          >
            Prev
          </Button>
          <Button type="submit" className={Styles.btn__login}>
            Next
          </Button>
        </div>
      </Row>
    </Form>
  );
}

export default Register;
