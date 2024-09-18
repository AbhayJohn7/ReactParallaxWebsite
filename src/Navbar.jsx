import React from "react";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav
      className="navbar fixed-top justify-content-center"
      variant="pills"
      defaultActiveKey="#home"
    >
      <Nav.Item>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#slider">Slider</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#parallax-section">End</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;