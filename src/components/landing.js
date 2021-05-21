import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from "../config/particle-config"
import './landing.css'
 
class Landing extends React.Component{
  
    render(){
        return (
          <div className="container">
            <Particles width='100vw' height='100vh'params={particlesConfig}></Particles>
          </div>
            
        );
    };
 
}

export default Landing;
