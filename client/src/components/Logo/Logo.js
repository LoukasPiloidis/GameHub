import React from 'react';
import logoImage from '../../images/logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="page-header__logo-container">
      <img className="logo-container__logo-image" src={logoImage} alt="GameHub logo" />
      <h1 className="logo-container__logo-title">GameHub</h1>
    </div>
  );
};

export default Logo;
