import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from './routes';

import HomePage from './pages/homePage';
import ScoresPage from './pages/scoresPage';
import NetworksPage from './pages/networksPage';
import RunsPage from './pages/runsPage';
import SubgraphsPage from './pages/subgraphsPage';

const AppRouter = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <Switch>
        <Route path={routes.scoresPage} exact component={ScoresPage} />
        <Route path={routes.networksPage} exact component={NetworksPage} />
        <Route path={routes.runsPage} exact component={RunsPage} />
        <Route path={routes.subgraphsPage} exact component={SubgraphsPage} />
        <Route path={routes.homePage} exact component={HomePage} />
        <Redirect to={routes.homePage} />
      </Switch>
    );
  } 
  return (
    <Switch>
      <Route path={routes.homePage} exact component={HomePage} />
      <Redirect to={routes.homePage} />
    </Switch>
  );
}

export default AppRouter;
