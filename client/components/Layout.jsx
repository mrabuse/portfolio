import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

// import components
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return {
      reactIconBase: {
        color: '#9B7F00',
        size: 40,
      },
    };
  }

  render() {
    return (
      <div className="site">
        <Header />
        <br />
        <div className="site-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {}.isRequired;

Layout.childContextTypes = {
  reactIconBase: PropTypes.object,
};

export default Layout;
