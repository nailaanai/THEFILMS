import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Image, Form } from "react-bootstrap";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logofixx.png";
import { useNavigate } from "react-router-dom";
import DropDownProfile from "./DropDownProfile";

const NavigationBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Toggle search bar visibility
  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`); // Navigate to SearchPages
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      variant="dark"
      className={`navbar ${isSticky ? "sticky" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: isSticky ? "rgba(0, 0, 0, 0.9)" : "transparent",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <Container fluid>
        <Nav className="navbar-left">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <Image src={logo} alt="Logo" />
          </Navbar.Brand>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#trending">Trending</a></li>
            <li><a href="#upcoming">Upcoming</a></li>
          </ul>
        </Nav>

        <Nav className="navbar-right">
          {/* Search Icon */}
          <FaSearch className="icons" onClick={toggleSearchBar} style={{ cursor: 'pointer' }} />

          {/* Conditional Search Bar */}
          {showSearch && (
            <Form onSubmit={handleSearchSubmit} className="search-bar">
              <Form.Control
                type="text"
                placeholder="Search Movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form>
          )}

          {/* Notification and Profile Icons */}
          <FaBell className="icons" />
          <DropDownProfile />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
