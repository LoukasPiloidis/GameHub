import React from 'react';
import './Burger.css';

const Burger = () => {
  const handleClick = e => {
    e.target.closest('div').classList.toggle('active');
    e.target.closest('div').classList.toggle('not-active');
  };

  return (
    <div className="page-header__burger">
      <div className="box">
        <div className="btn not-active" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Burger;
