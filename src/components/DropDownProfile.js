import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { Dropdown, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const DropDownProfile = () => {
  return (
    <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-profile"
              className="text-white"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaUserCircle className="icons" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item as={Link} to="/login" className="text-black">
                Login
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/signup" className="text-black">
                Signup
              </Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownProfile;
