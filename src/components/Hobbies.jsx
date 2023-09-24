import React from "react";
import {motion,AnimatePresence} from "framer-motion";

function Hob(img,title,description){
  this.img = img;
  this.title = title;
  this.description = description;
}

let a = new Hob("", "Maghinoktok","Day Dreamer");
let b = new Hob("", "Matulog","Sleeper");
let c = new Hob("", "Overthink","Fav. Hobby");
let d = new Hob("", "Tan aw og Niana Vids","Crush ko si Niana.");


class Hobbies extends React.Component{
  a = 56;
  state = {
    show:true
  };
 hobbies = [a,b,c,d]
  // VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 hobVontVar = {
   visible:{
     y:0,
     scale:1,
     opacity:1,
     transition:{
       duration:1.2
     }
   },
   hidden:{
     scale:.4,
     y:0,
     opacity:.1
   }
 }
 hobitemsvar = {
   visible:{
     scale:1.3,
     transition: {
       duration:1
     },
     hidden:{
       scale:1
     }
   }
 }
  // End of VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
  
 // LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 componentDidMount(){
   setTimeout(() => {
     this.setState(ps => {
       return {
         show: false
       }
     })
   }, 5000);
 }
 // End of LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 //CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_

 //END OF CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 // RWNDDEEEEEEEEEEEERRRRRR
  render(){
    return (
         <motion.div variants={this.hobVontVar} animate="visible" initial="hidden" id="Hobbies" className="Hobbies gap-4 flex flex-col  md:flex-row overflow-x-hidden md:overflow-x-scroll max-h-full max-w-full">
            {this.hobbies.length <= 0 && "No Hobbies"}
            {this.hobbies?.map((e,i) => {
              return(
                  <motion.div whileHover="visible" variants={{}} key={i} className="bg-teal-600 hover:scale-110 hover:bg-teal-400 md:hover:scale-125 hover:shadow-2xl p-7 HOBCONT flex items-center justify-center flex-col transition-all duration-700 ease-in-out">
                     <img src={e.img} Image />
                     <span className="p-5">{e.title}</span>
                     <span className="p-5">{e.description}</span>
                  </motion.div>
                )
            })}
         </motion.div>
      )
  }
}

export default Hobbies;