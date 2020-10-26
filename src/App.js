import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Login from "./components/login/login";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Login />} />
      <Route path="/home" render={() => <Home />} />
    </div>
  );
}

export default App;
