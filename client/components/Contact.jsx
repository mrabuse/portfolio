import React from 'react';

const Contact = () => (
  <div className="container-fluid">
    <div className="col-xs-12 col-md-8 col-md-offset-2 nav-contain">
      <h3 className="fancy">Want to get in touch?</h3>
      <p className="reach-out">Reach out to me!</p>
      <p>Email <br />
        <a
          className="main"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:megan.m.rabuse@gmail.com?subject=Reaching Out!"
        > megan.m.rabuse@gmail.com
        </a>
      </p>
      <p>Github <br />
        <a
          className="main"
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.github.com/mrabuse/"
        > mrabuse
        </a>
      </p>
      <p>LinkedIn <br />
        <a
          className="main"
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.linkedin.com/in/megan-rabuse/"
        > megan-rabuse
        </a>
      </p>
    </div>
  </div>
);

export default Contact;
