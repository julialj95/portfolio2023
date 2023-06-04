import React from 'react';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import Bio from './components/bio/Bio.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Bio/>
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App