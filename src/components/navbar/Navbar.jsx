import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>LamaBooking</span>
        <div className='navList'>
          <button className='navItem'>Register</button>
          <button className='navItem'>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
