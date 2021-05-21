import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />
      <Footer />
    </div>
  );

  
}

export default App;
