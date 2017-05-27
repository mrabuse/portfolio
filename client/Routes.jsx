import React from 'react';
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';

// import components
import Layout from './components/Layout';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import NotFound from './components/NotFound';

// import styles
import './assets/styles/app.css';

const Routes = () => (
  <BrowserRouter>
    <Layout history={browserHistory}>
      <Switch>
        <Route exact name="home" path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/resume" component={Resume} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
