import React from 'react';
import './Nav.css';
import {BiHomeCircle} from 'react-icons/bi';
import {HiOutlineUser} from 'react-icons/hi';
import {BsCodeSquare} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeCircle /></a>
      <a href="#about"><HiOutlineUser /></a>
      <a href="#projects"><BsCodeSquare /></a>
      <a href="#contact"><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav