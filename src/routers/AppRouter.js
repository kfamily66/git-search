import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import DetailsPage from "../components/DetailsPage";

const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/details" component={DetailsPage} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;
