import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import image from './images/home-trans.png'

import Landing from "./components/landing";


function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />
      <Title />
    </div>
  );

  function Title() {
    return(
      <div id="text_div center_all">
        <div className="center_all_text">
          <p className="homeHeader">GO FREEFALL</p>
          <p className="homeText">Modernizing The Skydive Industy</p>
          <div style={{height: "2px", width: "600px", background: "white", margin: "0 auto", marginTop: "10px", opacity: "20%"}}></div>
        </div>

        <div className="center_all">
          <img className="homeImage" src={image} alt="LOGO"/>
        </div>

        <div className="center_all_input">
          <p className="formText">Want to be first to know when we're ready?</p>
          <div className="formContainer"> 
            <div className="form__group field">
              <input className="form__field"  />
            </div>
            <p className="formBtn">SUBSCRIBE</p>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default App;
