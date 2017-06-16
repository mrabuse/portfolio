import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="container-fluid">
    <div className="col-xs-12 col-md-8 col-md-offset-2" >
      <h2 className="fancy" id="hi"> Hi there! </h2>
      <p>
        I&rsquo;m Megan and I&rsquo;m a software engineer specializing in
        full-stack JavaScript web development. I hail from the great Austin, Texas.
      </p>
      <p>What I do? Check out some of my <Link to="/work" className="main">recent work</Link>.</p>
      <p>Looking to add to your team?
       <Link to="/contact" className="main"> Drop me a line</Link>!</p>
      <br />
    </div>
  </div>
);

Landing.propTypes = {}.isRequired;

export default Landing;
