import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactLoading from "../common/Spinner";
import { userRoutes } from "./constants";

function routes() {
  return (
    <Suspense fallback={<ReactLoading />}>
      <Router>
        <Switch>
          {userRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default routes;
