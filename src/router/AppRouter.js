import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Landing from '../Components/Landing';
import About from '../Components/About';
import PageNotFound from '../Components/PageNotFound';

const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default AppRouter;
