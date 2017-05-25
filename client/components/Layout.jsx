import React from 'react';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="layout">
        <h1>Megan Rabuse</h1>
        <div>
          {this.props.children}
        </div>
        <h5>So website</h5>
      </div>
    );
  }
}

Layout.propTypes = {}.isRequired;

export default Layout;
