import React from 'react';

// import images
import megan from '../assets/styles/megan.jpg';

const About = () => (
  <div className="container-fluid">
    <div className="col-xs-12 col-lg-8 col-lg-offset-2 center">
      <h3> Skills</h3>
      <p>Development</p>
      <p>Tools</p>
      <p>Knowledge</p>
      <h3 className="hi">About Me</h3>
      <img className="row" id="megan" src={megan} />
      <br />
      <p className="row">
        I&rsquo;m a full stack web developer who loves working with data, beautiful interfaces,
        and super cool backend. </p>
    </div>
  </div>
);

export default About;
