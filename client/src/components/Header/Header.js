import React from 'react';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import UserButton from '../UserButton/UserButton';
import './Header.css';

const Header = () => {
  return (
    <header className="page-header">
      <Burger />
      <Logo />
      <UserButton />
    </header>
  );
};

export default Header;
