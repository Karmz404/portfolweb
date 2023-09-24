import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

class App extends React.Component{
  render(){
    return(
      <div className="bg-emerald-700 transition-all">
        <Navbar/>
        <Main/>
      </div>
    )
  } 
}

export default App;