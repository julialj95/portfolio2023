import React from 'react';
import Resume from '../../images/PortfolioResume.pdf';

const Subheader = () => {
  return (
    <div>
        <a href="#contact" className='btn'>Contact Me</a>
        <a href={Resume} download className='btn'>Download Resume</a>
    </div>
  )
}

export default Subheader