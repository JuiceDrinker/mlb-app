import React, { useState } from "react";
import "./App.css";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import Appbar from "./components/Appbar";
import IndexPage from "./components/IndexPage";
import API from "./lib/api-services";
import { SearchContext } from "./context/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchQuery: "hello" }}>
        <Appbar />
        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </SearchContext.Provider>
    </div>
  );
}

export default withRouter(App);
