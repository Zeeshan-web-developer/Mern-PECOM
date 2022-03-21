import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactLoading from "react-loading";
import { userRoutes } from "./constants";

const spinnerStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function routes() {
  return (
    <Suspense
      fallback={
        <div style={spinnerStyle}>
          <ReactLoading type="cylon" color="#c70039" height={120} width={120} />
        </div>
      }
    >
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
