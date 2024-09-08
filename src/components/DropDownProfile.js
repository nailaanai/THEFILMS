import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Dropdown, Button } from 'react-bootstrap';

const DropDownProfile = () => {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle
        as={Button}
        variant="link"
        className="p-0"
        id="dropdown-profile"
        style={{ color: 'white' }}
      >
        <FontAwesomeIcon icon={faUser} size="lg" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">SIGN IN</Dropdown.Item>
        <Dropdown.Item href="#">LOG IN</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownProfile;
