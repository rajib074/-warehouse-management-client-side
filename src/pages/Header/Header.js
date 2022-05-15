import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/our-products">
                Our Products
              </NavLink>
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
              {user ? (
                <>
                  <NavLink className="nav-link" to="/additem">
                    Add Item
                  </NavLink>
                  <NavLink className="nav-link" to="/myitem">
                    My Item
                  </NavLink>
                </>
              ) : (
                ""
              )}
            </Nav>
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn btn-danger"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-info"
              >
                Sign In
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
