import React, { useState } from "react";
import { Form, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Styles from "./Register.module.css";
import { decrementPageCount, registerUser } from "../../../store/actions";
import { states } from "../../../assets/Address.js";
function Register({ formData, setFormData }) {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setShow(true);
    dispatch(registerUser(formData));
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body
          style={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#4bb543",
              fontSize: "50px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Thank You
          </h2>
          Your Account Has Been Created Sucessfully.Thanks!
          <div>
            <Button
              className={Styles.btn__primary}
              onClick={() => setShow(false)}
            >
              Ok
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer style={{}}>
          <Link to="/login" onClick={() => history.push("/login")}>
            Please Login Here
          </Link>
        </Modal.Footer>
      </Modal>
      <Row className="mb-3">
        <Form.Group md="4" controlId="validationCustom01">
          <Form.Label>State</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={formData.state}
            onChange={(e) => {
              setState(e.target.value);
              setFormData({ ...formData, state: e.target.value });
            }}
          >
            <option key="state">select state</option>
            {states.map((state, index) => {
              return (
                <option key={`states${index}`} defaultValue="select State">
                  {state.name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom01">
          {state && (
            <>
              <Form.Label>District</Form.Label>
              <Form.Select
                aria-label="Category"
                value={formData.district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                  setFormData({ ...formData, district: e.target.value });
                }}
              >
                <option>select District</option>
                {state &&
                  states
                    .find((stated) => stated.name === state)
                    .districts.map((district, index) => {
                      return (
                        <option key={`districts${index}`}>
                          {district.name}
                        </option>
                      );
                    })}
              </Form.Select>
            </>
          )}
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom02">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="address"
            value={formData.address}
            pattern="[a-zA-Z0-9]{3,}"
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom01">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Pin Code"
            value={formData.pinCode}
            pattern="[0-9]{6}"
            onChange={(e) => {
              setFormData({ ...formData, pinCode: e.target.value });
            }}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Pin Code.
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
            Submit
          </Button>
        </div>
      </Row>
    </Form>
  );
}

export default Register;
