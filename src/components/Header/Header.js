import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);

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
                        <Nav.Link as={Link} to="blogs">
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={Link} to="inventories">
                            Stock Management
                        </Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="additem">
                                    Add Item
                                </Nav.Link>
                                <Nav.Link as={Link} to="myitems">
                                    My Items
                                </Nav.Link>
                                <Nav.Link as={Link} to="manageitems">
                                    Manage Items
                                </Nav.Link>
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => signOut(auth)}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
