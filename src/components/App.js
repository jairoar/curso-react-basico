import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeHome from "../pages/BadgeHome";
import BadgeDetails from "../pages/BadgeDetailsContainer";
import BadgeEdit from "../pages/BadgeEdit";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={BadgeHome} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
