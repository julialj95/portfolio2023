import React from 'react';
import './Header.css';
import Subheader from '../subheader/Subheader';
import headshot from '../../images/Headshot2-removebg.png';
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
            <a href='#contact' className="scroll">Scroll</a>
        </div>
    </header>
  )
}

export default Header