import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Styles from "./Register.module.css";
import { incrementPageCount } from "../../../store/actions";
function Register({ formData, setFormData }) {
  const [validated, setValidated] = useState(false);
  const history = useHistory();
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
      <Row className="mb-3">
        <Form.Group md="4" controlId="validationCustom01">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Your Full Name"
            value={formData.firstName}
            pattern="[A-Za-z]{5,}"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom02">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={formData.lastName}
            placeholder="Enter Your Full Name"
            pattern="[A-Za-z]{5,}"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            value={formData.email}
            placeholder="Enter Your Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom04">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
            value={formData.phone}
            placeholder="Enter Your Phone Number"
            pattern="^[0-9]{10}$"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Mobile Number.
          </Form.Control.Feedback>
        </Form.Group>

        <div className={Styles.buttons}>
          <Button
            className={Styles.btn__login}
            onClick={() => history.push("/login")}
          >
            Cancel
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
