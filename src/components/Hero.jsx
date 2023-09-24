import React from "react";
import {motion} from "framer-motion";
import BG2 from "../assets/img/bg2.png.jpg"
import ME2 from "../assets/img/fotr.webp"
import CR2 from "../assets/img/r.webp"
import CL2 from "../assets/img/l.webp"


export default class Hero extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       inpVal : ""
     };
     this.fullscreenmobile = "min-h-mobile";
   }
 
 // VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 meVar = {
   visible:{
     y: 0,
     opacity: 1,
     transition:{
       duration: 5
     }
   },
   hidden:{
     y: 400,
     opacity:.6
   }
 }
 
 lcVar = {
   visible:{
     x: 0,
     transition:{
       duration: 3
     }
   },
   hidden:{
     x: "-100vw"
   }
 }
 rcVar = {
   visible:{
     x: 0,
     transition:{
       duration: 3
     }
   },
   hidden:{
     x: "100vw"
   }
 }
 
btnVar={
  visible:{
     scale:1.6,
     transition:{
       type:"spring",
       stiffness:90
     }
   },
   hidden:{
     scale: 1
   }
}
 
box1Var = {
  visible:{
    x:[-20,-20,40,40,-20],
    y:[-20,40,40,-20,-20],
    //opacity:[0,1],
    transition:{
      repeatType: "mirror",
      repeat:Infinity,
      duration: 6
    }
  },
  hidden:{
    //opacity:0,
    rotate: 0
  }
}
socmedVar = {
  visible:{
    y:0,
    opacity:1,
    transition:{
      duration: 6
    }
  },
  hidden:{
    y:0,
    opacity: 0
  }
}

socmedItemsVar={
  visible:{
    x:[-20,-20,40,40,-20],
    y:[-20,40,40,-20,-20],
    opacity:[0,1],
    transition:{
      repeatType: "mirror",
      repeat:Infinity,
      duration: 6
    }
    
  }
}
  // End of VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
  
 // LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 // End of LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 //CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 handleInputVal(val){
   this.setState((state,props) => {
     return {
       inpVal: val
     }
   })
 }
 //END OF CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 // RWNDDEEEEEEEEEEEERRRRRR
  render() {
    return (
        <motion.div  className={`Hero brightness-75 overflow-hidden pointer-events-auto bg-slate-900 overflow-x-hidden relative lg:min-h-screen ${this.fullscreenmobile}`}>
           <img className={`z-0 BG lg:min-h-screen ${this.fullscreenmobile}`} src={BG2} />
           {/*TEXTSSSSSSSSSSSSSSSSSSS*/}
           <div style={{height:"100%",width:"100%"}} className="TXT-CONT absolute top-0 z-50 flex md:flex-row flex-col md:p-6 justify-center gap-10 md:gap-36 items-center text-blue-400">
              <div className="md:scale-150 flex md:flex-col mt-20 items-center gap-2">
                <motion.div dragConstraints={{top:0,left:0,right:0,bottom:0}} drag variants={this.box1Var} animate="visible" className="bg-bladck SEC1 p-3 text-center md:text-start ">
                    <h4 className="lg:text-lg font-light text-white ">PROFESSIONAL</h4>
                    <h2 className="lg:text-3xl text-2xl font-bold text-teal-100">TAMBAY</h2>
                    <h2 className="text-white lg:text-3xl text-2xl brightness-150 p-1 border-2 border-teal-700 font-extralight"> KARMA</h2>
                </motion.div>
                <motion.div variants={this.socmedVar} animate="visible" initial="hidden" className="flex flex-col md:flex-row gap-3">
                    <motion.div drag variants={this.socmedItemsVar} className="bg-blue-200 p-1">FB</motion.div>
                    <motion.div drag variants={this.socmedItemsVar} className="bg-black p-1">Tik</motion.div>
                    <motion.div drag variants={this.socmedItemsVar} className="bg-red-200 p-1">IG</motion.div>
                </motion.div>
              </div>
              <motion.div dragConstraints={{top:0,left:0,right:0,bottom:0}}  drag className="md:w-2/5 px-3 w-11/12">
                {this.state.inpVal ? <h6 className="text-xs text-teal-100 font-light">Sanaol, naay message. <span className="text-yellow-100 font-bold">Maghulat ko</span> .</h6>: <h6 className="text-xs text-teal-100 font-light">Karma is <span className="text-yellow-200 font-medium">tired</span>, but is still trying his best. Would you like to motivate him?</h6>}
                  <div className="INPUT-CONT flex gap-0">
                      <input placeholder="Leave your inspiring message here..." className="w-full border text-teal-100 px-6 font-light focus:outline-none border-teal-200 text-sm bg-transparent" type="text" onChange={e => { this.handleInputVal(e.target.value).bind(this) }} value={this.state.inpVal} />
                      <motion.button variants={this.btnVar}  whileTap="visible" className={`p-3 bg-teal-500 font-bold outline-none ${this.state.inpVal ? "text-white" : "text-slate-700"}`}> MESSAGE </motion.button>
                  </div>
              </motion.div>
           </div>
           {/*END OF TEXTSSSSSSSSSSSSSSSSSSS*/}
           <motion.img variants={this.meVar} animate="visible" initial="hidden" style={{top:"30px",zIndex:49}} className={`absolute ME lg:min-h-screen ${this.fullscreenmobile}`} src={ME2} />
           <motion.img variants={this.lcVar} whileInView="visible" initial="hidden" className={`scale-105 absolute top-0 blur-sm lg:min-h-screen ${this.fullscreenmobile}`}src={CL2} />
           <motion.img variants={this.rcVar} whileInView="visible" initial="hidden" className={`scale-105 absolute top-0 blur-sm lg:min-h-screen ${this.fullscreenmobile}`} src={CR2} />
        </motion.div>
      )
  }
}
// VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
  // End of VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
  
 // LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 // End of LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 //CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 //END OF CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 // RWNDDEEEEEEEEEEEERRRRRR