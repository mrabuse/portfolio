import React from 'react';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';

const Routes = () => (
  <BrowserRouter>
    <Layout history={browserHistory}>
      <Route component={Landing} />
    </Layout>
  </BrowserRouter>
);

export default Routes;
