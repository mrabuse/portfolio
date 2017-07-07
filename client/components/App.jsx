import React from 'react';
import PropTypes from 'prop-types';

const App = props => (
  <div className="col-xs-12 col-md-6 col-md-offset-0" >
    <h3 className="app-name">{props.app.title}</h3>
    <a href={props.app.link} target="_blank" rel="noopener noreferrer" >
      <img className="app" src={`/images/${props.app.image}.png`} />
    </a>
    <div>
      <p className="caption" >{props.app.snippet}</p>
      <div>
        {/*  eslint-disable react/no-array-index-key */}
        {props.app.techs.map((tech, i) => <span key={i} className="badge">{tech}</span>) }
        {/* eslint-enable react/no-array-index-key */}
      </div>
    </div>
    <br />
  </div>
);

App.propTypes = {
  app: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    snippet: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string),
  }),
}.isRequired;

export default App;
