import React from "react";
import {motion} from "framer-motion";

class Navbar extends React.Component{
  navLinks = ["Home","About Me", "Crushes","Skills","Projects"];
 
  constructor(props){
    super(props);
    this.state = {
      mess:"You Cliked Me",
      complete: false,
      show: false,
      btnDis:true
    }
  }
  
 // VARIANTSSSSSSSSSSSSSSS
  navVar = {
    hidden:{
      y: -500,
      opacity: 0
    },
    visible:{
      y:0,
      opacity:1,
      transition:{
        type:"spring",
        stiffness: 20,
        
      }
    }
  }
  //END OF VARIANTSSSSSSSSSSSSSSS
  
 // CUST METHODSSSSSSSSSSSSSSS
  animationDone(){
    this.setState(ps => {
      return {
        complete : true
      }
    })
  }
  
  handleClick(){
    this.setState((ps) => {
      return {
        show: !ps.show,
        complete: !ps.complete
      }
    })
  }
 //END CUST METHODSSSSSSSSSSSSSSS



//LIFE CYCLESSSSSSSSSSS
componentDidUpdate(prevProp,prevState){
  if (prevState.btnDis !== this.state.btnDis) {
    console.log("Changes Happen", this.state.btnDis)
  }
}
//END LIFE CYCLESSSSSSSSSSS


// RENDERRRRRRRRRRR
    render(){
        return (
          <motion.div
            variants={this.navVar}
            initial="hidden"
            animate="visible"
            className="Nav z-50 flex justify-between items-center  p-3 fixed-top"
          >
            <div className="text-white font-extralight">Karmz.js</div>
            <ul className="hidden lg:flex transition-all">
              {this.navLinks?.map((e, i) => {
                return (
                  <li
                    className="mx-4 text-white font-extralight hover:text-emerald-700 hover:scale-125"
                    key={i}
                  >
                    <a href={`#${e === "About Me" ? "About" : e}`}>{e.toUpperCase()}</a>
                  </li>
                );
              })}
            </ul>

            {/*BUTTON1*/}
            <motion.button
              animate={{
                rotate: this.state.complete ? 360 : 0,
              }}
              transition={{ duration: 0.7 }}
              onClick={this.handleClick.bind(this)}
              className={
                !this.state.show
                  ? `px-2 text-white lg:hidden`
                  : "hidden"
              }
            >
              {" "}
              {this.state.show ? "O" : "X"}{" "}
            </motion.button>

            {/*MOBILEEEEEEEEEEEEEEEEEEEEEE*/}
            <motion.div
              animate={{
                x: this.state.show ? 0 : "120%",
              }}
              initial={{
                x: "120%",
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
              }}
              className={`lg:hidden MenuNav mobileMenu flex py-12`}
            >
              {/*BUTTON2*/}
              <motion.button
                drag
                style={{ zIndex: 1 }}
                onClick={this.handleClick.bind(this)}
                className={
                  this.state.show
                    ? "text-white lg:hidden absolute top-3 right-3"
                    : "hidden"
                }
              >
                {" "}
                X{" "}
              </motion.button>
              {/*LINKSSSSSSSSSSSSSSS*/}
              <ul className="m-auto">
                {this.navLinks?.map((e, i) => {
                  return (
                    <li key={i} className="p-8 hover:bg-teal-400 hover:text-black text-white hover:font-medium font-extralight">
                      <a  onClick={this.handleClick.bind(this)} href={`#${e === "About Me" ? "About" : e}`}>{e}</a>
                    </li>
                  );
                })}
              </ul>
              {/*END OF LINKSSSSSSSSSSSSSSS*/}
            </motion.div>
          </motion.div>
        );
    }
}

export default Navbar;