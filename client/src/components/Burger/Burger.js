import React from 'react';
import './Burger.css';

const Burger = () => {
  const handleClick = e => {
    e.target.closest('div').classList.toggle('active');
    e.target.closest('div').classList.toggle('not-active');
  };

  return (
    <div className="page-header__burger">
      <div className="burger__burger-icon">
        <div className="burger-icon__button not-active" onClick={handleClick}>
          <span className="button__line"></span>
          <span className="button__line"></span>
          <span className="button__line"></span>
        </div>
      </div>
      <div className="burger__menu hidden">
        <ul className="menu__list">
          <li>Action</li>
          <li>Fantasy</li>
          <li>Adventure</li>
          <li>Simulation</li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
