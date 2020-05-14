import React, { Fragment } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,  
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";


import Home from "./../../containers/pages/home/Home";
import ContactUs from "../../containers/pages/contact-us/ContactUs";
import About from "../../containers/pages/about/About";
import Login from "../../containers/pages/login/Login";
import '../../lib/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComponent = () => {
  return (
    <Fragment>
      <Router>

        <Container>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand  as={NavLink} to="/"><FontAwesomeIcon icon="home" /> { }Front End</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                
                <Nav.Link as={Link} to="/">
                  Our Blog
                </Nav.Link>
                
                <NavDropdown title="Who We are" alignRight>
                  <NavDropdown.Item as={NavLink} to="/about">
                  <FontAwesomeIcon icon="address-card" /> { }
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/contact-us">
                  <FontAwesomeIcon icon="envelope" /> { }
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              
                <NavDropdown title="Your Account" alignRight>
                  <NavDropdown.Item as={NavLink} to="login">
                  <FontAwesomeIcon icon="sign-in-alt" /> { }
                    Login
                    
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                  <FontAwesomeIcon icon="cog" /> { }
                    Settings
                    </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                  <FontAwesomeIcon icon="sign-out-alt" /> { }
                    Logout
                    </NavDropdown.Item>
                </NavDropdown>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default NavbarComponent;
