import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import ME from "../assets/img/me.png"
import ME2 from "../assets/img/me.webp"
import Projects from "./Projects.jsx";
import Navbar from "./Navbar.jsx";

class About extends React.Component{
  constructor(){
    super()
    this.state = {
      hob : false,
      op:true
    };
  }
  // VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
  aboutVar = {
    visible:{
      x:[-400,90,0],
      opacity:[0,.5,1],
      transition:{
        duration:2
      }
    },
    hidden:{
      x:-100,
      transition:{
        duration:2
      }
    }
  }
  // End of VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
  
 // LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
componentDidMount(){
  setTimeout(function() {
    this.setState(ps => {
      return {
        op:false
      }
    })
  }.bind(this), 3000);
}
 
 // End of LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 //CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 handleHobbies(){
   this.setState(ps => {
     return {
       hob: !ps.hob
     }
   })
 }
 //END OF CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 // RWNDDEEEEEEEEEEEERRRRRR
  render(){
    return (
         <motion.div id="About" className="About bordfer-2 pb-40 py-14 md:pt-16">
      <AnimatePresence>
          {/*this.state.op ? <motion.div exit={{x:-400}} transition={{duration:7}} className="bg-teal-100">ONE PIECE</motion.div> : null*/}
       </AnimatePresence>   
       
      <AnimatePresence>
             {
               !this.state.hob ? (
             <motion.div  variants={this.aboutVar} initial="hidden" animate="visible"  className="text-teal-100 ABOUT-ME flex flex-col md:flex-row items-center justify-evenly ">
                <img className="w-1/2 border-b-2 border-teal-400 md:border-r-2 md:border-b-0 p-2" src={ME2} />
                <div className="w-96 bogrder text-center my-12 px-10 md:px-0">
                  <h4 className="font-medium md:border-b-2 border-teal-100 w-1/2 m-auto text-teal-300">ABOUT ME</h4>
                  <div className="font-extralight my-5 md:text-start">
                     <p className="text-center md:text-start mb-10">I am Louie Jay Waluhan. I am cute. Adoy..lorem epsumsjsjjsjsjsjdjjdd
                     udududuudididiididididiidididid
                     duididididiidididididiidodododidiidi.</p>
                     
                     <p>School: Siquijor State College</p>
                     <p>Course: Bs Info-Tech</p>
                     <p>Home Address: Bogo, Maria, Siquijor</p>
                     <div onClick={() => {this.handleHobbies()}} className="cursor-crosshair HOBBIES bg-teal-600 w-1/2 m-auto px-7 py-3 text-center my-5"> MY PROJECTS </div>
                  </div>
                </div>
             </motion.div>
                ) : (
                  <>
                    <div className="p-5 font-light text-teal-100 flex justify-between md:mx-20">
                       <h5 className="MYHOBBIESLABEL">MY PROJECTS</h5>
                       <button onClick={this.handleHobbies.bind(this)} className="BACK-BTN backdrop-blur-3xl p-1">Back</button>
                       
                    </div>
                    <Projects />
                  </>
                  )
             }
       </AnimatePresence>   
         
             <Navbar style={{zIndex:-44222}} openProjects={this.handleHobbies.bind(this)} />
  
         </motion.div>
      )
  }
}

export default About;