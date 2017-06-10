import React from 'react';

const App = props => (
  <div className="col-sm-6 col-md-4" >
    <h3 className="app-name">{props.app.title}</h3>
    <a href={props.app.link}>
      <img className="app" src={`/images/${props.app.image}.png`} />
    </a>
    <div className="caption">
      <p>{props.app.snippet}</p>
      <div>
        {props.app.techs.map(tech => <span className="badge">{tech}</span>) }
      </div>
    </div>
  </div>
);

export default App;
