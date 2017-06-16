import React from 'react';
import '../assets/styles/font-awesome/css/font-awesome.min.css';

// import assets
import Resume from '../assets/styles/Megan Rabuse Resume.pdf';

const Footer = () => (
  <div className="container-fluid" id="footer">
    <div className="col-xs-12 col-md-4 col-md-offset-4 nav-contain">
      <a className="col-xs-4 nav" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/megan-rabuse">
        <i className="fa fa-2x fa-linkedin-square" aria-hidden="true" /><br />
        <span>LinkedIn</span>
      </a>
      <a className="col-xs-4 nav" target="_blank" rel="noopener noreferrer" href="http://github.com/mrabuse">
        <i className="fa fa-2x fa-github-alt" aria-hidden="true" /><br />
        <span>Github</span>
      </a>
      <a className="col-xs-4 nav" target="_blank" rel="noopener noreferrer" href={Resume}>
        <i className="fa fa-2x fa-file-text" aria-hidden="true" /><br />
        <span>Resume</span>
      </a>
    </div>
    <p className="col-xs-12 col-md-8 col-md-offset-2" id="credit">
      Megan Rabuse © 2017
    </p>
  </div>
);

export default Footer;
