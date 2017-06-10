import React from 'react';

// import components;
import App from './App';

// import app images
import '../assets/styles/cardCast.png';
import '../assets/styles/echoes.png';
import '../assets/styles/surveyScribe.png';

// import data;
import apps from '../applications';


class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps,
    };
  }

  render() {
    return (
      <div className="container-fluid nav-contain">
        <div className="col-md-8 col-md-offset-2 row">
          { apps.map(app => <App app={app} />) }
          <br />
        </div>
      </div>
    );
  }
}

export default Work;
