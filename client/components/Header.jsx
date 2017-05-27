import React from 'react';
import Flexbox from 'flexbox-react';
import { Link } from 'react-router-dom';

// import assets
import FaGithubAlt from 'react-icons/fa/github-alt';
import FaLinkedinSquare from 'react-icons/fa/linkedin-square';

const Header = () => (
  <Flexbox element="header" id="header">
    <Flexbox className="content" >
      <Flexbox flexGrow={1} id="title">Megan Rabuse</Flexbox>
      <Flexbox flexGrow={1} >
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/resume">Resume</Link>
      </Flexbox>
      <Flexbox flexGrow={1} id="icon">
        <a href="https://www.linkedin.com/in/megan-rabuse/">
          <FaLinkedinSquare className="icon" />
        </a>
        <a href="https://github.com/mrabuse">
          <FaGithubAlt className="icon" />
        </a>
      </Flexbox>
    </Flexbox>
  </Flexbox>
);

Header.propTypes = {}.isRequired;

export default Header;
