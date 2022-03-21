import React from "react";
import { Card, Form, Button } from "react-bootstrap";
function Search() {
  return (
    <Card className="shadow-lg p-3 mb-2 bg-body rounded">
      <Card.Body>
        <Card.Text className="d-flex justify-content-evenly w-100">
          <Form.Control
            type="text"
            placeholder="Search Pizza"
            style={{ width: "30%" }}
          />
          <Form.Select aria-label="Category" style={{ width: "30%" }}>
            <option value="1">All</option>
            <option value="2">Veg</option>
            <option value="3">Non-Veg</option>
          </Form.Select>
          <Button variant="danger">Search</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Search;
