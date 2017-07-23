import React from 'react';

// import images
import megan from '../assets/media/megan.jpg';

const pWidth = 'col-xs-12 about';

const About = () => (
  <div className="container-fluid">
    <div className="col-xs-12 col-md-10 col-md-offset-1">
      <div className="col-xs-12 col-md-6">
        <h3 className="fancy">About Me</h3>
        <p className={pWidth}>
          I&rsquo;m a full stack software engineer who loves creating well designed,
          intuitive interfaces and building clean, structured back-ends. </p>
        <p className={pWidth}> As an engineer, I love taking complex data and
          transforming it into useful, intuitive, and pleasing experiences for users.
          I believe using a website should be a fun and effortless experience.
          I have experience setting up servers, designing SQL and NoSQL databases,
          and architecting web applications from the ground up. </p>
        <p className={pWidth}>When I&rsquo;m not coding, you can find me playing
          board games, beating any
          escape room in town, or getting my bard on with Sh*t-Faced Shakespeare.</p>
      </div>
      <div className="col-xs-12 col-md-6">
        <br />
        <div className="col-xs-8 col-xs-offset-2">
          <img id="megan" src={megan} />
        </div>
        <br />
        <div className={pWidth}>
          <h3 className="fancy" id="skills"> Skills</h3>
          <p className="skill">Front-end</p>
          <p>JavaScript, HTML, CSS3, React, Redux, AngularJS, ES6</p>
          <p className="skill">Back-end</p>
          <p>Node.js, NoSQL (MongoDB), SQL (MySQL, PSQL), RESTful APIs, Webpack</p>
          <p className="skill">Knowledge</p>
          <p>Agile Workflow, Test Driven Development (Mocha/Chai, Karma, Jasmine),
          Deployment (Heroku, DigitalOcean, AWS)</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
