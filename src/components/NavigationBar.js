import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Button, Dropdown } from "react-bootstrap";
import logo from "../assets/logoweb.jpg";
import { FaSearch } from "react-icons/fa";

const NavigationBar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Ganti 50 dengan nilai yang diinginkan
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        variant="dark"
        className={`navbar ${isSticky ? "sticky" : ""}`}
        style={{ position: isSticky ? "fixed" : "relative", top: 0, width: "100%", zIndex: 1000 }}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <Image src={logo} alt="Logo" width="50" height="50" className="me-4" />
            <span>THEFILMS</span>
          </Navbar.Brand>
          <div className="input-wrapper ms-4">
            <FaSearch id="search-icon" />
            <input placeholder="Search Movies..." />
          </div>
          <Nav className="ms-auto">
            <Nav.Link href="#">WATCHLIST</Nav.Link>
            <div className="introButton text-center">
              <Button href="#" variant="danger" className="mx-2">
                SIGN IN
              </Button>
            </div>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="secondary">EN</Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown-menu">
                <Dropdown.Item className="navbar-dropdown-item">EN</Dropdown.Item>
                <Dropdown.Item className="navbar-dropdown-item">FR</Dropdown.Item>
                <Dropdown.Item className="navbar-dropdown-item">ES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
