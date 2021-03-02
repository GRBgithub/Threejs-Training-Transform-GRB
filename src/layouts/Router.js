import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import NavBar from "../components/ui/NavBar/NavBar";

import Routes from "./Routes";
const Router = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <>
            <NavBar routes={Routes} location={location}></NavBar>
            {/* Si besoin de navbar dynamic web et mobile*/}
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                {Routes.map((route) =>
                  route.protectedRoute === true &&
                  !localStorage.getItem("token") ? (
                    <Redirect to="/"></Redirect>
                  ) : (
                    <Route
                      exact
                      key={route.path}
                      path={route.path}
                      component={route.component}
                      protectedRoute={route.protectedRoute}
                    />
                  )
                )}
              </Switch>
            </AnimatePresence>
          </>
        )}
      />
    </BrowserRouter>
  );
};
export default Router;
