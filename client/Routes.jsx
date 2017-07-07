import React from 'react';
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';

// import components
import Layout from './components/Layout';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

// import styles
import './assets/app.css';

const Routes = () => (
  <BrowserRouter>
    <Layout history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
