import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import './social.css';

const Social = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/julialouisejohnson95/' target='_blank' rel='noreferrer'><FaLinkedin/></a>
        <a href="https://github.com/julialj95" target='_blank' rel='noreferrer'><FaGithubSquare /></a>
    </div>
  )
}

export default Social