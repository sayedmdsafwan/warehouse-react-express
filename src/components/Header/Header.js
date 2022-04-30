import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="text-danger">
                        Fruits NINJA
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="manageitems">
                            Manage Items
                        </Nav.Link>
                        <Nav.Link as={Link} to="additem">
                            Add Item
                        </Nav.Link>
                        <Nav.Link as={Link} to="myitems">
                            My Items
                        </Nav.Link>
                        <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
