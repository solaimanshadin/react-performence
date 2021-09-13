import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParentComponent from "./components/reactMemo/ParentComponent";
import Navbar from "./components/navbar/Navbar";
import HookFlow from "./components/hookFlow/HookFlow";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HookFlow />
          </Route>
          <Route path="/memoization">
            <ParentComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
