import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

// import components
import Header from './Header';
import Footer from './Footer';

// import favicon images
import '../assets/styles/favicons/apple-touch-icon.png';
import '../assets/styles/favicons/favicon-16x16.png';
import '../assets/styles/favicons/favicon-32x32.png';
import '../assets/styles/favicons/favicon.ico';
import '../assets/styles/favicons/manifest.json';
import '../assets/styles/favicons/safari-pinned-tab.svg';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="site">
        <Header />
        <br />
        <div className="site-content">
          {this.props.children}
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
