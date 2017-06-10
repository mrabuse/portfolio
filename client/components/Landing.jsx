import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="container-fluid">
    <div className="col-xs-12 col-lg-8 col-lg-offset-2" >
      <h2 id="hi"> Hi there! </h2>
      <p>
        I&rsquo;m Megan and I&rsquo;m a software engineer specializing in
        full-stack JavaScript web development. React, Redux, NodeJS, AngularJS, PGSQL, MongoDB
        - I like &rsquo;em all.
        Check out some of my <Link to="/work" className="main">recent work</Link>.
      </p>
      <p>I hail from Austin, Texas.</p>
      <p>I make web apps and award-winning theater.</p>
      <p>Looking to add to your team?
       <Link to="/contact" className="main"> Drop me a line!</Link></p>
      <br />
    </div>
  </div>
);

Landing.propTypes = {}.isRequired;

export default Landing;
