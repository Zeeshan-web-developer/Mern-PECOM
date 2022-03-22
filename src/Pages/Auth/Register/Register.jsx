import React, { useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Styles from "./Register.module.css";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function Register() {
  const pageNo = useSelector((state) => state.user.pageNo);
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    state: "",
    district: "",
    pinCode: "",
    address: "",
  });

  const pageTitle = ["Personal Information", "Set Password", "Contact Info"];
  const showPage = () => {
    if (pageNo === 0) {
      return <Step1 formData={formData} setFormData={setFormData} />;
    } else if (pageNo === 1) {
      return <Step2 formData={formData} setFormData={setFormData} />;
    } else if (pageNo === 2) {
      return <Step3 formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className={Styles.container}>
      <Container>
        <Row>
          <Col md={5} sm={12} className="offset-md-3">
            <Card className="shadow-lg rounded">
              <Card.Header>
                <h3 className="pt-4 text-center">{pageTitle[pageNo]}</h3>
              </Card.Header>
              <Card.Body>
                {showPage()}
                <div className={Styles.buttons}></div>
              </Card.Body>
              <Card.Footer className="pt-4 text-center pb-4">
                <small className="text-muted">
                  Already have an account?{" "}
                  <Link to="/login" onClick={() => history.push("/login")}>
                    Login
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

export default Register;
