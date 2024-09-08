import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Button, Dropdown } from "react-bootstrap";
import logo from "../assets/logofixx.png";
import { FaSearch } from "react-icons/fa";
import DropDownProfile from "./DropDownProfile";
import { Link } from "react-router-dom";
import Intro from "../components/Intro";  // Pastikan import komponen yang diperlukan
import SearchBar from "../components/SearchBar"

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
          <SearchBar />
          {/* <div className="input-wrapper ms-4">
            <FaSearch id="search-icon" />
            <input placeholder="Search Movies..." />
          </div> */}
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/genres" className="m-2">GENRES</Nav.Link>  {/* Gunakan Link */}
            <Nav.Link as={Link} to="/Intro" className="m-2">TRENDING</Nav.Link>  {/* Gunakan Link */}
            <DropDownProfile />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
