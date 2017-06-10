import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="container-fluid" id="header">
    <div className="row">
      <div className="col-xs-8 col-xs-offset-2 nav-contain">
        <Link to="/" id="title">Megan Rabuse</Link>
        <p id="subtitle">software engineer</p>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-xs-12 col-md-8 col-md-offset-2 nav-contain" >
        <Link className="nav col-xs-4 col-md-4" to="/about">ABOUT</Link>
        <Link className="nav col-xs-4 col-md-4" to="/work">WORK</Link>
        <Link className="nav col-xs-4 col-md-4" to="/contact">CONTACT</Link>
      </div>
    </div>
  </div>
);

Header.propTypes = {}.isRequired;

export default Header;
