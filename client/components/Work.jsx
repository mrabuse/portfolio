import React from 'react';

// import components;
import App from './App';

// import app images
import '../assets/styles/cardCast.png';
import '../assets/styles/echoes.png';
import '../assets/styles/surveyScribe.png';
import '../assets/styles/balloonCat.png';
import '../assets/styles/portfolio.png';

// import data;
import apps from '../applications';

function oddEven(applications, rowIndex) {
  const app1 = applications[rowIndex * 2];
  const app2 = applications[(rowIndex * 2) + 1];

  if (!app2) {
    return <App app={app1} key={rowIndex * 2} />;
  }

  return [
    <App app={app1} key={rowIndex * 2} />,
    <App app={app2} key={(rowIndex * 2) + 1} />,
  ];
}

function createAppRows(applications) {
  const rowCount = Math.ceil(applications.length / 2);
  const rows = [];

  for (let i = 0; i < rowCount; i++) { // eslint-disable-line no-plusplus
    rows.push(
      <div className="row" key={i}>
        {oddEven(applications, i)}
      </div> // eslint-disable-line comma-dangle
    );
  }

  return rows;
}

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
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          {createAppRows(apps)}
          <br />
        </div>
      </div>
    );
  }
}

export default Work;
