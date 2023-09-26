import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Loader from "./components/Loader.jsx";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      load:true
    }
  }
  
  handleApp() {
      this.setState((ps) => {
        return {
          load:false
        }
      });
    }
  
  
  render(){
    return(
     !this.state.load ? (
        <div className="App bg-emerald-700 transition-all">
          <Navbar bn={"Main"}/>
          <Main/>
        </div>
       ): (
         <Loader handleApp={this.handleApp.bind(this)} />
      )
    )
  } 
}

export default App;