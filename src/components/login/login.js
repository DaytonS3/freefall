import React from "react";
import "./login.css";

import Logo from "../../images/Freefall_Logo_White.png";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
            <div className="imgContainer">
               <img className="logo" src={Logo} />
               <h1>COMING SOON</h1>
            </div>
           
           
      </div>
    );
  }
}

export default Login;
