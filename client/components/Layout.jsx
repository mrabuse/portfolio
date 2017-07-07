import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

// import components
import Header from './Header';
import Footer from './Footer';

// import favicon images
import '../assets/media/favicons/apple-touch-icon.png';
import '../assets/media/favicons/favicon-16x16.png';
import '../assets/media/favicons/favicon-32x32.png';
import '../assets/media/favicons/favicon.ico';
import '../assets/media/favicons/manifest.json';
import '../assets/media/favicons/safari-pinned-tab.svg';

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
