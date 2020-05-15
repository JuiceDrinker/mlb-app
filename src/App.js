import React, { useReducer, useEffect } from "react";
import "./App.css";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import Appbar from "./components/Appbar";
import IndexPage from "./components/IndexPage";
import API from "./lib/api-services";
import SearchContextState from "./context/SearchContextState";
import searchReducer from "./reducers/searchReducer";
import initialState from "./state/initialState";
import SearchContextDispatch from "./context/SearchContextDispatch";

function App() {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="App">
      <SearchContextDispatch.Provider value={{ dispatch }}>
        <SearchContextState.Provider value={{ state }}>
          <Appbar />
          <Switch>
            <Route path="/">
              <IndexPage />
            </Route>
          </Switch>
        </SearchContextState.Provider>
      </SearchContextDispatch.Provider>
    </div>
  );
}

export default withRouter(App);
