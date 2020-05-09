import React, { useState } from "react";
import "./App.css";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import Appbar from "./components/Appbar";
import IndexPage from "./components/IndexPage";
import API from "./lib/api-services";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Switch>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
