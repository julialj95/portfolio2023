import React from 'react';
import Resume from '../../images/PortfolioResume.pdf';
import './subheader.css';

const Subheader = () => {
  return (
    <div className='subheader'>
        <a href="#contact" className='btn'>Contact Me</a>
        <a href={Resume} download className='btn'>Download Resume</a>
    </div>
  )
}

export default Subheader