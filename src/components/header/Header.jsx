import React from 'react';
import './Header.css';
import Subheader from '../subheader/Subheader';

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Welcome! I am</h5>
            <h1>Julia Johnson</h1>   
            <h5>Fullstack Developer</h5>     
        </div>
        <Subheader />
    </header>
  )
}

export default Header