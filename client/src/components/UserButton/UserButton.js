import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './UserButton.css';

const UserButton = () => {
  return (
    <button className="page-header__user-button">
      <FontAwesomeIcon icon={faSignInAlt} className="user-button__icon" />
    </button>
  );
};

export default UserButton;
