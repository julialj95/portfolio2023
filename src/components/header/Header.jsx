import React from 'react';
import './Header.css';
import Subheader from '../subheader/Subheader';
import headshot from '../../images/IMG-5070.jpg';
import Social from '../Social/Social';

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Welcome! I am</h5>
            <h1>Julia Johnson</h1>   
            <h5>Fullstack Developer</h5>   
            <Subheader />  
            <Social />

            <div>
                <img src={headshot} alt="headshot" className='headshot'/>
            </div>
        </div>
    </header>
  )
}

export default Header