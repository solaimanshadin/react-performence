import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed-top">
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Hook flow
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/memoization">Memoization</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
