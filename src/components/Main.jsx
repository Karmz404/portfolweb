import React, {Component} from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";

export default class Main extends Component {
  styles = {
    height: 700+"px"
  }
  
  
  render() {
    return (
          <div id="Home" style={{height:"1500px"}} className="bg-teal-800 overflow-x-hidden">
              <Hero />
              <About />
              <Skills />
              <Projects />
          </div>
        
      )
  }
}